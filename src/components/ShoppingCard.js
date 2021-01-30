import React, { useState } from 'react';
import { Card } from 'antd';
import { ShoppingExtraIcon } from '../assets/Icons/CustomIcons';
import BK_1 from '../assets/img/BK_1.png';
export default function ShoppingCard() {
  return (
    <Card
      title={<div className="c-card__title">Shopping Cart</div>}
      bordered={false}
      // extra={<ShoppingExtraIcon />}
      className="c-card border-0"
    >
      <div className="row c-card__list">
        <div className="col-7">Product Info</div>
        <div className="col-3">Quantity</div>
        <div className="col-2 text-right">Price</div>
      </div>
      <ShoppingCardItem
        name={'SV1 Electric Scooter'}
        image={BK_1}
        cost={'$69/mo.'}
      />
      <ShoppingCardItem name={'Beyond +'} image={''} cost={'$0/mo.'} />
      <div className="row c-card__footer">
        <div className="col-7"></div>
        <div className="col-3">
          <span className="c-card__footer-subtotal">subtotal </span>
          <span className="c-card__footer-items">2 items</span>
        </div>
        <div className="col-2  text-right">$79/mo.</div>
      </div>
    </Card>
  );
}

const ShoppingCardItem = (props) => {
  return (
    <div className="row c-card__item">
      <div className="col-2">
        <img
          src={
            props.image !== ''
              ? props.image
              : 'https://media.istockphoto.com/photos/background-blue-gradient-abstract-picture-id910021106?k=6&m=910021106&s=612x612&w=0&h=dJ1HiBOr6KTiE5c1odNULI8MbYdpDSZAZD_uS_NEGHQ='
          }
          alt={props.name}
          height={50}
        />
      </div>
      <div className="col-5">{props.name}</div>
      <div className="col-3">
        <InputNum />
      </div>
      <div className="col-2 text-right">{props.cost}</div>
    </div>
  );
};

const InputNum = (props) => {
  const [value, setValue] = useState(1);
  return (
    <div className="c-input-num row">
      <span className="col-4" onClick={() => setValue(value - 1)}>
        -
      </span>
      <span className="col-4">{value}</span>
      <span className="col-4" onClick={() => setValue(value + 1)}>
        +
      </span>
    </div>
  );
};
