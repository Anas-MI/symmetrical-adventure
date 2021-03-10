import api from '../resources/api';
import { loadStripe } from '@stripe/stripe-js';
import { message, notification } from 'antd';

export const getAPIkeys = async () => {
  var beyond_config = localStorage.getItem('beyond_config');
  if (beyond_config) {
    return JSON.parse(beyond_config);
  } else {
    const result = await api.get(`/stripe/setup`);

    localStorage.setItem('beyond_config', JSON.stringify(result.data));
    if (result.data) {
      return result.data;
    }
  }
};

export const stripePromise = async () => {
  const pkey = await getAPIkeys();
  loadStripe(pkey || 'pk_test_1XPhRvBHCislCDxFaYm3HR97');
};

export const handleSubmitPayment = async (
  paymentMethods,
  payload,
  config,
  cb,
  onSuccess
) => {
  const { stripe } = payload;
  if (!config || !stripe) {
    return;
  }
  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod(
      paymentMethods
    );
    if (error || !paymentMethod) {
      notification.error({
        message: error?.message || 'Something is not right...',
      });
      cb();
      throw Error(error?.message || 'Something is not right...');
    }
    const paymentId = paymentMethod.id;

    //gettoing users
    let beyond_users = JSON.parse(localStorage.getItem('beyond_users'));
    let alreadyUsers = [];
    if (beyond_users) {
      alreadyUsers = beyond_users.filter(
        (item) => item.email === payload.email
      );
    } else {
      beyond_users = [];
    }

    if (alreadyUsers.length === 0 || beyond_users.length === 0) {
      const res = await api.post(`/stripe/customer`, {
        email: payload.email,
        name: payload.name,
      });

      if (res && res.status === 200) {
        const id = res.data.customerId;
        const _finalpayload = {
          customerId: id,
          paymentId,
          // preOrderPriceId: config.preOrderPriceId,
          priceId: config.preOrderPriceId,
        };

        beyond_users.push({ email: payload.email, customerId: id });
        localStorage.setItem('beyond_users', JSON.stringify(beyond_users));

        const response = await api.post(`/stripe/checkout`, _finalpayload);
        if (response && response.status === 200) {
          cb();
          notification.success({ message: 'Payment successfull.' });
          onSuccess();
        } else {
          notification.error({ message: 'Something went wrong' });
        }
      } else {
        cb();
        notification.error({
          message:
            res.response && res.response.data && res.response.data.message
              ? res.response.data.message
              : 'Something went wrong',
        });
      }
    } else {
      const _finalpayload = {
        customerId: alreadyUsers[0].customerId,
        paymentId,
        priceId: config.preOrderPriceId,
        // preOrderPriceId: config.preOrderPriceId,
      };

      const res = await api.post(`/stripe/checkout`, _finalpayload);

      if (res && res.status === 200) {
        cb();
        notification.success({ message: 'Payment successfull.' });
        onSuccess();
      } else {
        cb();
        notification.error({ message: 'Something went wrong' });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
