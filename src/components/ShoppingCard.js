import React, { useState } from 'react';
import { Card } from 'antd';
import { ShippingIcon2 } from '../assets/Icons/CustomIcons';
import { getShoppingContent } from '../pageContent';

export default function ShoppingCard() {
  const [quantity, setQuantity] = useState(1);
  const costSV1 = 1;
  const taxSV1 = costSV1 * (8.875 / 100);
  const inputContent = getShoppingContent();
  const cardContent = inputContent.cardContent;
  const footerConten = inputContent.footerConten;

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
      {cardContent.map((card, index) => (
        <ShoppingCardItem
          name={card.name}
          image={card.image}
          cost={card.cost}
          quantity={quantity}
          setQuantity={setQuantity}
          disabled={card.disabled}
        />
      ))}

      <div className="row c-card__footer">
        <div className="col-6"></div>
        <div className="col-3 c-card__footer-subtotal">Subtotal</div>
        <div className="col-3  c-card__footer-subtotal-value">
          ${(costSV1 * quantity).toFixed(2)}
        </div>
        <div className="col-6"></div>
        <div className="col-3 c-card__footer-subtotal">Tax</div>
        <div className="col-3  c-card__footer-subtotal-value">
          ${(taxSV1 * quantity).toFixed(2)}
        </div>
        <div className="col-6"></div>
        <div className="col-3 c-card__footer-total">Total</div>
        <div className="col-3  c-card__footer-total-value">
          ${((1 + 1 * taxSV1) * quantity).toFixed(2)}
        </div>
        <div className="c-card__footer-terms col-12">
          {footerConten.map((f, index) => (
            <em>
              {f}
              <br />
            </em>
          ))}
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
          src={props.image && props.image}
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
