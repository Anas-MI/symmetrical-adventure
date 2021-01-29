
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


export const handleSubmitPayment = async (paymentMethods, payload, config) => {
  const { stripe, customerID } = payload
  if (!config || !stripe) {
    return;
  }
  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod(paymentMethods);
    if (error || !paymentMethod) {
      notification.error({ message: error?.message || 'Something is not right...' })
      throw Error(error?.message || 'Something is not right...');
    }
    const paymentID = paymentMethod.id;
    notification.success({ message: 'Payment successfull' })
    return paymentID
  } catch (error) {
    notification.error({ message: 'Something went wrong' })
    // message.error(error.message())
    // Let the user know that something went wrong here...
  }
};