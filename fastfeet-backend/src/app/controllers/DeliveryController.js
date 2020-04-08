import { Op } from 'sequelize';
import * as Yup from 'yup';
import { isBefore, isAfter, setHours, startOfHour } from 'date-fns';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';
import File from '../models/File';
// import Notification from '../schemas/Notification';
// import NewDeliveryMail from '../jobs/NewDeliveryMail';
// import Queue from '../../lib/Queue';

class DeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    const isRecipient = await Recipient.findOne({
      where: { id: recipient_id },
    });
    if (!isRecipient) {
      return res.status(401).json({ error: 'Must inform valid Recipient' });
    }

    const isDeliveryman = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });
    if (!isDeliveryman) {
      return res.status(401).json({ error: 'Must inform valid Deliveryman' });
    }

    const checkAvailability = await Delivery.findOne({
      where: {
        deliveryman_id,
        canceled_at: null,
        start_date: { [Op.ne]: null },
        end_date: null,
      },
    });
    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Deliveryman is making a delivery already' });
    }

    const delivery = await Delivery.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    await Deliveryman.findByPk(delivery.deliveryman_id, {
      iclude: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    /*
    await Notification.create({
      content: `Nova encomenda para ${deliveryman_id}.`,
      deliveryman: deliveryman_id,
    });

    // Fila, redis, queue, bee
    await Queue.add(NewDeliveryMail.key, { delivery, deliveryman });
*/
    return res.json(delivery);
  }

  async update(req, res) {
    const { id } = req.params;
    const start_date = new Date();
    // const start_date = parseISO('2020-02-05T19:06:32.189Z');

    const openingTime = startOfHour(setHours(start_date, 5));
    const closingTime = startOfHour(setHours(start_date, 15));
    if (isBefore(start_date, openingTime)) {
      return res.status(400).json({ error: 'Deliveries open at 08:00.' });
    }
    if (isAfter(start_date, closingTime)) {
      return res.status(400).json({ error: 'Deliveries close at 18:00.' });
    }

    let delivery = await Delivery.findByPk(id);

    if (delivery.start_date) {
      return res.status(400).json({ error: 'Delivery already started.' });
    }
    if (delivery.end_date) {
      return res.status(400).json({ error: 'Delivery already ended.' });
    }
    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled.' });
    }

    const checkAvailability = await Delivery.findOne({
      where: {
        id,
        canceled_at: null,
        start_date: { [Op.ne]: null },
        end_date: null,
      },
    });
    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Deliveryman is making a delivery already' });
    }

    delivery = await delivery.update({ start_date });

    return res.json(delivery);
  }

  async index(req, res) {
    // const { page = 1 } = req.query;
    // const { id } = req.params;
    // const test = `%${req.query.test}%`;
    const { test } = req.query;

    const delivery = await Delivery.findAll({
      // where: { deliveryman_id: id, canceled_at: null },
      // where: { canceled_at: null },
      where: {
        product: {
          [Op.like]: `%${test}%`,
        },
      },
      order: ['start_date'],
      // limit: 5,
      // offset: (page - 1) * 5,
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'product',
        'start_date',
        'end_date',
        'canceled_at',
      ],
      include: [
        {
          model: Signature,
          as: 'signature',
          attributes: ['name', 'url', 'path'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'city', 'state', 'zipcode'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    });
    // console.log(req.query);
    // console.log('Hello');
    return res.json(delivery);
  }

  async delete(req, res) {
    const { id } = req.params;
    // console.log(id);
    // id: delivery_id.
    const canceled_at = new Date();

    let delivery = await Delivery.findByPk(id);
    if (delivery.end_date) {
      return res.status(400).json({ error: 'Delivery already ended.' });
    }
    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled.' });
    }

    delivery = await delivery.update({ canceled_at });

    return res.json(delivery);
  }
}

export default new DeliveryController();
