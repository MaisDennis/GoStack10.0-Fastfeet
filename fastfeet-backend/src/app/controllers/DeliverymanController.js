import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Create failed' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });
    if (deliverymanExists) {
      return res.status(400).json({
        error: 'Create failed: Deliveryman with this e-mail already exists.',
      });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.string(),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Update failed: Please check info.' });
    }

    const { id } = req.params;
    const { email } = req.body;

    let deliveryman = await Deliveryman.findByPk(id);
    /*
    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({
        email: req.body.email,
      });

      if ( ) {
        return res.status(400).json({
          error: 'Update failed: Deliveryman with this e-mail already exists.',
        });
      }
    }
*/
    deliveryman = await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async index(req, res) {
    const { test } = req.query;
    const deliveryman = await Deliveryman.findAll({
      where: {
        name: {
          [Op.like]: `%${test}%`,
        },
        canceled_at: null,
      },
      attributes: ['id', 'name', 'email', 'created_at', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    return res.json(deliveryman);
  }

  async delete(req, res) {
    const { id } = req.params;
    const canceled_at = new Date();

    let deliveryman = await Deliveryman.findByPk(id);
    deliveryman = await deliveryman.update({ canceled_at });
    /*
    const deliverymanlist = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
    });
*/
    // console.log(canceled_at);

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
