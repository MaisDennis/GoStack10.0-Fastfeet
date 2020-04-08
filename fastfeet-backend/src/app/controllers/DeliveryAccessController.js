import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Signature from '../models/Signature';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliveryAccessController {
  async index(req, res) {
    const { id } = req.params; // id: deliveryman_id.
    const { filter } = req.query;

    if (filter === 'delivered') {
      const delivery = await Delivery.findAll({
        where: {
          deliveryman_id: id,
          canceled_at: null,
          end_date: { [Op.ne]: null },
        },
        order: ['start_date'],
        attributes: [
          'id',
          'recipient_id',
          'deliveryman_id',
          'product',
          'start_date',
          'end_date',
        ],
        include: [
          {
            model: Signature,
            as: 'signature',
            attributes: ['name', 'url'],
          },
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'name',
              'street',
              'number',
              'city',
              'state',
              'zipcode',
            ],
          },
          {
            model: Deliveryman,
            as: 'deliveryman',
            attributes: ['name', 'email', 'created_at'],
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
      return res.json(delivery);
    }

    if (filter === 'test') {
      return res.json('OK for now');
    }

    const delivery = await Delivery.findAll({
      where: { deliveryman_id: id, canceled_at: null, end_date: null },
      order: ['start_date'],
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'product',
        'start_date',
        'end_date',
      ],
      include: [
        {
          model: Signature,
          as: 'signature',
          attributes: ['name', 'url'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'city', 'state', 'zipcode'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email', 'created_at'],
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
    return res.json(delivery);
  }

  async update(req, res) {
    const { id } = req.params; // id: delivery_id.
    const end_date = new Date();
    const { signature_id } = req.body;

    let delivery = await Delivery.findByPk(id);

    if (delivery.end_date) {
      return res.status(400).json({ error: 'Delivery already ended.' });
    }
    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled.' });
    }
    if (end_date && !signature_id) {
      return res.status(400).json({ error: 'Must provide signature' });
    }

    delivery = await delivery.update({
      end_date,
      signature_id,
    });

    return res.json(delivery);
  }
}

export default new DeliveryAccessController();
