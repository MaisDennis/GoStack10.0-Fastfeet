import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const { id } = req.params; // id: deliveryman_id.
    const notifications = await Notification.find({
      deliveryman: id,
    })
      .sort({ createdAt: 'desc' })
      .limit(10);
    return res.json(notifications);
  }

  async update(req, res) {
    // id: notification_id.
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    return res.json(notification);
  }
}
export default new NotificationController();
