import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipcode: Yup.string()
        .required()
        .min(7),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Create failed' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExists) {
      return res
        .status(400)
        .json({ error: 'Create failed: Recipient already exists.' });
    }

    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string().min(7),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Update failed' });
    }

    const { id } = req.params;

    let recipient = await Recipient.findByPk(id);

    recipient = await recipient.update(req.body);

    return res.json(recipient);
  }

  async index(req, res) {
    const { test } = req.query;
    const recipient = await Recipient.findAll({
      where: {
        name: {
          [Op.like]: `%${test}%`,
        },
        canceled_at: null,
      },
    });
    return res.json(recipient);
  }

  async delete(req, res) {
    const { id } = req.params;
    const canceled_at = new Date();

    let recipient = await Recipient.findByPk(id);
    recipient = await recipient.update({ canceled_at });

    return res.json(recipient);
  }
}

export default new RecipientController();
