import React, { useState, useEffect } from 'react';
import payment from '../assets/img/payment.jpg';
import { VisaIcon } from '../assets/Icons/CustomIcons';
import cvc from '../assets/img/cvc.png';
import yourhandle from 'countrycitystatejson';
import { AppleFilled } from '@ant-design/icons';
import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  message,
  notification,
} from 'antd';
import InputMask from 'react-input-mask';
import api from '../resources/api';
import { getConfig } from '@testing-library/react';
import { handleSubmitPayment, getAPIkeys } from '../utils/stripe';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Card } from 'antd';

import { Spin } from 'antd';
const { Option } = Select;

const PaymentCard = ({ config }) => {
  const [loading, setloading] = useState(false);
  const [fullname, setFullname] = useState('');
  const [state, setState] = useState({
    countryArray: [],
  });

  const elements = useElements();
  const stripe = useStripe();

  useEffect(() => {
    getCountries();
  }, []);
  const getCountries = () => {
    setState({
      countryArray: yourhandle.getCountries(),
    });
  };

  const handleSubmit = (values) => {
    // const payload = {
    //   email: values.email,
    //   name: values.name,
    // };
    const payload = {
      name: fullname,
    };
    console.log(elements.getElement(CardNumberElement));

    setloading(true);
    api
      .post(`/stripe/customer`, payload)
      .then(async function (res) {
        const _paymentMethod = {
          type: 'card',
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: fullname,
          },
        };
        const { customerID } = res.data;
        const _payload = {
          customerID: customerID,
          stripe: stripe,
        };
        const paymentID = await handleSubmitPayment(
          _paymentMethod,
          _payload,
          config
        );

        const _finalpayload = {
          customerID,
          paymentID,
        };

        api
          .post(`/stripe/subscription`, _finalpayload)
          .then((res) => {
            setloading(false);
            console.log(res);
          })
          .catch((err) => {
            setloading(false);
            notification.error({ message: 'Something went wrong' });
            console.log(err);
          });
      })
      .catch((err) => {
        // console.log(err.response.data.message)
        setloading(false);
        notification.error({
          message:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : 'Something went wrong',
        });
        console.log(err);
      });
  };

  return (
    <Spin spinning={loading} size={'large'}>
      <Card
        title={<div className="c-card__title">Payment</div>}
        bordered={false}
        // extra={<DeliveryExtraIcon />}
        className="c-card border-0"
      >
        {/* <Form onFinish={handleSubmit} layout="vertical"> */}
        <div className="row c-card-payment">
          <div className="col-6">
            <CardNumberElement className="c-input" />
            <input
              name="name"
              className="c-input"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <div classname="col-4">
              <CardExpiryElement className="c-input " />
            </div>
            <div classname="col-6">
              <CardCvcElement className="c-input " />
            </div>
          </div>
          <div className="col-6">
            <div className="c-card__card-represent">
              <div className="row">
                <div className="col-12">
                  <VisaIcon />
                </div>
              </div>
              <div className="row">
                <div className="col-12 c-card__card-represent-number">
                  4242 4242 4242 4242
                </div>
              </div>

              <div className="row c-card__card-represent-key">
                <div className="col-7">Card Holder</div>
                <div className="col-3">Exp</div>
                <div className="col-1">CVC</div>
              </div>
              <div className="row c-card__card-represent-value">
                <div className="col-7">Yvonne Günther</div>
                <div className="col-3">04/12</div>
                <div className="col-1">***</div>
              </div>
            </div>
          </div>
        </div>

        {/* </Form> */}
      </Card>
      <button className="c-card__btn" onClick={handleSubmit} block>
        Finish Order
      </button>
    </Spin>
  );
};
export default PaymentCard;
