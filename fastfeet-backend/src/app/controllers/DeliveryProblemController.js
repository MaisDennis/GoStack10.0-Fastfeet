import { Op } from 'sequelize';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async store(req, res) {
    const { id } = req.params;
    const { description } = req.body;
    const deliveryproblem = await DeliveryProblem.create({
      delivery_id: id,
      description,
    });
    return res.json(deliveryproblem);
  }

  async index(req, res) {
    const { filter } = req.query;

    const deliveryproblem = await DeliveryProblem.findAll({
      where: {
        canceled_at: null,
      },
    });

    return res.json(deliveryproblem);
  }

  async delete(req, res) {
    const { id } = req.params;
    // console.log(id);
    const canceled_at = new Date();

    let deliveryProblem = await DeliveryProblem.findByPk(id);
    deliveryProblem = await deliveryProblem.update({ canceled_at });

    return res.json(deliveryProblem);
  }

  // Cancel deliveries @DeliveryController.delete
}
export default new DeliveryProblemController();
