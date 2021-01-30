import React from 'react';
import { Card } from 'antd';

const PaymentCard = () => {
  return (
    <Card
      title={<div className="c-card__title">Payment</div>}
      bordered={false}
      // extra={<DeliveryExtraIcon />}
      className="c-card border-0"
    >
      <div className="pb-3">
        <div className="row c-card__input ">
          <div className="col-6">
            <input className="c-input" placeholder="First Name" />
          </div>
          <div className="col-6">
            <input className="c-input" placeholder="Last Name" />
          </div>
        </div>
        <div className="row c-card__input ">
          <div className="col-6">
            <input className="c-input" placeholder="Phone" />
          </div>
          <div className="col-6">
            <input className="c-input" placeholder="Email" />
          </div>
        </div>
        <div className="row c-card__input t">
          <div className="col-6">
            <select name="country" id="country" className="c-input">
              <option value="United States">United States</option>
              <option value="Brazil">Brazil</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
          <div className="col-6">
            <select name="state" id="state" className="c-input">
              <option value="state">State</option>
              {/* <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option> */}
            </select>
          </div>
        </div>
        <div className="row c-card__input t">
          <div className="col-9">
            <input className="c-input" placeholder="Address" />
          </div>
          <div className="col-3">
            <input className="c-input" placeholder="Zip Code" />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default PaymentCard;
