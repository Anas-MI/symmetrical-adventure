import React, { useState } from 'react';
import { Card } from 'antd';
import { ShoppingExtraIcon, ShippingIcon2 } from '../assets/Icons/CustomIcons';
import BK_1 from '../assets/img/img1.png';
import logo2 from '../assets/img/logo2.png';
import lock from '../assets/img/lock.png';
export default function ShoppingCard() {
  const [quantity, setQuantity] = useState(1);
  const costSV1 = 1;
  const taxSV1 = costSV1 * (8.875 / 100);
  return (
    <Card
      title={<div className="c-card__title">Shopping Cart</div>}
      bordered={false}
      extra={<ShippingIcon2 />}
      className="c-card border-0"
    >
      <div className="row c-card__list">
        <div className="col-7">Product Info</div>
        <div className="col-3">Quantity</div>
        <div className="col-2 text-right">Price</div>
      </div>
      <ShoppingCardItem
        name={'Reserve Your Scooter (March Delivery)'}
        image={BK_1}
        cost={costSV1}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <ShoppingCardItem
        name={'Beyond Premium (free for 6 months)'}
        image={logo2}
        cost={0}
        quantity={quantity}
        setQuantity={setQuantity}
        disabled={true}
      />
      <ShoppingCardItem
        name={'GPS Tracker & Lock (free for new riders)'}
        image={lock}
        cost={0}
        quantity={quantity}
        setQuantity={setQuantity}
        disabled={true}
      />
      <div className="row c-card__footer">
        <div className="col-6"></div>
        <div className="col-3 c-card__footer-subtotal">Subtotal</div>
        <div className="col-3  c-card__footer-subtotal-value">
          ${(costSV1 * quantity).toFixed(2)}/mo.
        </div>
        <div className="col-6"></div>
        <div className="col-3 c-card__footer-subtotal">Tax</div>
        <div className="col-3  c-card__footer-subtotal-value">
          ${(taxSV1 * quantity).toFixed(2)}/mo.
        </div>
        <div className="col-6"></div>
        <div className="col-3 c-card__footer-total">Total</div>
        <div className="col-3  c-card__footer-total-value">
          ${((1 + 1 * taxSV1) * quantity).toFixed(2)}
        </div>
        <div className="c-card__footer-terms col-12">
          <em>
            * Monhtly subscription of $59 will begin at time of pickup
            <br />
            ** Pickup available at Beyond HQ (368 Broadway, New York, NY 10013)
          </em>
        </div>
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
      <div className="col-5 p-0">{props.name}</div>
      <div className="col-3">
        <InputNum
          value={props.quantity}
          setValue={props.setQuantity}
          disabled={props.disabled}
        />
      </div>

      <div className="col-2 text-right">
        {props.cost === 0 ? 'free' : `$${props.cost.toFixed(2)}`}
      </div>
    </div>
  );
};

const InputNum = (props) => {
  const { value, setValue, disabled } = props;
  return (
    <div className={`c-input-num row ${disabled && ' c-input-num--disabled'}`}>
      <span
        className={`col-4 `}
        onClick={() => !disabled && value > 1 && setValue(value - 1)}
      >
        -
      </span>
      <span
        className="col-4"
        style={{
          alignSelf: 'center',
        }}
      >
        {value}
      </span>
      <span
        className={`col-4 `}
        onClick={() => !disabled && setValue(value + 1)}
      >
        +
      </span>
    </div>
  );
};
