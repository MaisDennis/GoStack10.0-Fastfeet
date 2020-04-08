import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class NewDeliveryMail {
  get key() {
    return 'NewDeliveryMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `New Delivery created at ${new Date()}`,
      // text: `Hello ${deliveryman.name}, Delivery with product ${product} awaiting Start.`,
      template: 'newDelivery',
      context: {
        deliveryman: deliveryman.name,
        delivery: delivery.id,
        date: format(new Date(), "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new NewDeliveryMail();
