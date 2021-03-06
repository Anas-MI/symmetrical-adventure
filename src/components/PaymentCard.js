import React, { useState, useEffect, useRef } from 'react';
import { VisaIcon } from '../assets/Icons/CustomIcons';
import yourhandle from 'countrycitystatejson';
import { handleSubmitPayment } from '../utils/stripe';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Card } from 'antd';

import { Spin } from 'antd';

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
    const payload = {
      name: fName + ' ' + lName,
      email: email,
      stripe: stripe,
    };

    const _paymentMethod = {
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name: fName + ' ' + lName,
      },
    };
    setloading(true);
    handleSubmitPayment(
      _paymentMethod,
      payload,
      config,
      () => setloading(false),
      () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setStripeResponse('success');
        setloading(false);
      }
    );
  };

  return (
    <Spin spinning={loading} size={'large'}>
      <Card
        title={<div className="c-card__title">Payment</div>}
        bordered={false}
        className="c-card border-0"
      >
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
            handleSubmit();
          }}
          block
        >
          Submit
        </button>
        <a href="#right-side-success">
          <button
            className="c-card__btn mobile-view m-auto"
            onClick={handleSubmit}
            block
          >
            Submit
          </button>
        </a>
      </div>
    </Spin>
  );
};
export default PaymentCard;
