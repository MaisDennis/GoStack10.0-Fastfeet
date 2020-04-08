import { Op } from 'sequelize';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController2 {
  async index(req, res) {
    const { test } = req.query;

    const deliveryproblem = await DeliveryProblem.findAll({
      where: {
        canceled_at: null,
        delivery_id: {
          [Op.eq]: `${test}`,
        },
      },
    });

    return res.json(deliveryproblem);
  }
}
export default new DeliveryProblemController2();
