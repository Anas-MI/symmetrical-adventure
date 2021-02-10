
import api from '../resources/api';
import { loadStripe } from '@stripe/stripe-js';
import { message, notification } from 'antd';

export const getAPIkeys = async () => {
  const result = await api.get(`/stripe/setup`)
  return result.data
}

export const stripePromise = async () => {
  const res = await getAPIkeys()
  if (res.data) {
    const { publishableKey } = res.data
    return loadStripe('pk_test_1XPhRvBHCislCDxFaYm3HR97')
  }
  loadStripe('pk_test_1XPhRvBHCislCDxFaYm3HR97')
};


export const handleSubmitPayment = async (paymentMethods, payload, config, cb, onSuccess) => {
  const { stripe } = payload
  if (!config || !stripe) {
    return;
  }
  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod(paymentMethods);
    if (error || !paymentMethod) {
      notification.error({ message: error?.message || 'Something is not right...' })
      cb()
      throw Error(error?.message || 'Something is not right...');
    }
    const paymentID = paymentMethod.id;

    api.post(`/stripe/customer`, { email: payload.email, name: payload.name })
      .then(async function (res) {
        const { id } = res.data.customer
        const _finalpayload = {
          customerID: id, paymentID, priceID: config.priceID
        }
        api.post(`/stripe/checkout`, _finalpayload)
          .then(res => {
            cb()
            notification.success({ message: 'Payment successfull.' })
            onSuccess()
            //const { clientSecret } = res.data
          })
          .catch(err => {
            cb()
            notification.error({ message: 'Something went wrong' });
          })

      }).catch(err => {
        cb()
        notification.error({
          message: err.response.data && err.response.data.message
            ? err.response.data.message
            : 'Something went wrong'
        });
      })

  } catch (error) {
    // message.error(error.message())
    // Let the user know that something went wrong here...
  }
};