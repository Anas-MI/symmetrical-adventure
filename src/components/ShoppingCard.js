import React, { useState } from 'react';
import { Card } from 'antd';
import { ShoppingExtraIcon } from '../assets/Icons/CustomIcons';
import BK_1 from '../assets/img/BK_1.png';
import logo2 from '../assets/img/logo2.png';
export default function ShoppingCard() {
  const [quantity, setQuantity] = useState(1);
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
        cost={69}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <ShoppingCardItem
        name={'Beyond +'}
        image={logo2}
        cost={1}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div className="row c-card__footer">
        <div className="col-7"></div>
        <div className="col-3">
          <span className="c-card__footer-subtotal">subtotal </span>
          <span className="c-card__footer-items">{quantity * 2} items</span>
        </div>
        <div className="col-2  text-right">${70 * quantity}/mo.</div>
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
          width={50}
        />
      </div>
      <div className="col-5">{props.name}</div>
      <div className="col-3">
        <InputNum value={props.quantity} setValue={props.setQuantity} />
      </div>
      <div className="col-2 text-right">${props.cost}/mo.</div>
    </div>
  );
};

const InputNum = (props) => {
  const { value, setValue } = props;
  return (
    <div className="c-input-num row">
      <span className="col-4" onClick={() => value > 1 && setValue(value - 1)}>
        -
      </span>
      <span className="col-4">{value}</span>
      <span className="col-4" onClick={() => setValue(value + 1)}>
        +
      </span>
    </div>
  );
};
