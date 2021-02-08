import React, { useState, useEffect, useRef } from 'react';
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

const PaymentCard = (props) => {
  const { config, setStripeResponse, email } = props;
  const [loading, setloading] = useState(false);

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const [state, setState] = useState({
    countryArray: [],
  });

  const cvcRef = useRef(null);

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

    // setStripeResponse('success');

    const payload = {
      name: fName + ' ' + lName,
      email: email,
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
            name: fName + ' ' + lName,
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
            setStripeResponse('success');
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
          <div className=" col-lg-6 col-xs-12">
            <CardNumberElement className="c-input" />
            <div className="row c-card-payment__exp">
              <div className="col-6 py-0">
                <input
                  name="fName"
                  className="c-input"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="col-6 py-0">
                <input
                  name="lName"
                  className="c-input"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>
            <div className="row c-card-payment__exp">
              <div className="col-6">
                <CardExpiryElement className="c-input " />
              </div>
              <div className="col-6">
                <CardCvcElement className="c-input " ref={cvcRef} />
                {console.log('cvcRef', cvcRef)}
              </div>
            </div>
          </div>
          <div className=" col-lg-6 col-xs-12">
            <div className="c-card__card-represent">
              <div className="row">
                <div className="col-12">
                  <VisaIcon />
                </div>
              </div>
              <div className="row">
                <div className="col-12 c-card__card-represent-number">
                  **** **** **** ****
                </div>
              </div>

              <div className="row c-card__card-represent-key">
                <div className="col-7">Card Holder</div>
                <div className="col-3">Exp</div>
                <div className="col-1">CVC</div>
              </div>
              <div className="row c-card__card-represent-value">
                <div className="col-7">{fName + ' ' + lName}</div>
                <div className="col-3">12/21</div>
                <div className="col-1">***</div>
              </div>
            </div>
          </div>
        </div>

        {/* </Form> */}
      </Card>
      <div className="c-card__btn-wrapper">
        <button
          className="c-card__btn web-view"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            handleSubmit();
          }}
          block
        >
          Finish Order
        </button>
        <a href="#right-side-success">
          <button
            className="c-card__btn mobile-view m-auto"
            onClick={handleSubmit}
            block
          >
            Finish Order
          </button>
        </a>
      </div>
    </Spin>
  );
};
export default PaymentCard;
