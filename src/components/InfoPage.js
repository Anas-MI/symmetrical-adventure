import React, { useState } from 'react';
import BK_1 from '../assets/img/BK_1.png';
import { CheckIcon } from '../assets/Icons/CustomIcons';
import { Image } from 'antd';

export default function InfoPage() {
  const [selectedImage, setSelectedImage] = useState(1);
  const infoImages = {
    1: BK_1,
    2: 'https://ridebeyond.com/wp-content/uploads/2020/10/BN_featureWide_01.png',
    3: 'https://images-na.ssl-images-amazon.com/images/I/41oHEF7ORBL._SL1000_.jpg',
  };

  return (
    <div>
      <h2 className="c-infopage__title">SV1 Electric Scooter</h2>
      <div className="c-infopage__subtitle">$1 reservation fee + $69/mo.</div>
      <div className="c-infopage__image-wrapper">
        <Image
          src={infoImages[selectedImage]}
          alt="asd"
          width="100%"
          height="400px"
        />
      </div>
      <div className="c-infopage__image-selection-wrapper">
        <div
          className="c-infopage__image-selection-img"
          onClick={() => setSelectedImage(1)}
        >
          <img src={infoImages[1]} alt="img" />
        </div>
        <div
          className="c-infopage__image-selection-img"
          onClick={() => setSelectedImage(2)}
        >
          <img src={infoImages[2]} alt="img" />
        </div>
        <div
          className="c-infopage__image-selection-img"
          onClick={() => setSelectedImage(3)}
        >
          <img src={infoImages[3]} alt="img" />
        </div>
      </div>

      <div className="c-infopage__description-title">Description</div>
      <p className="c-infopage__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt labore. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt labore.
      </p>
      <div>
        <div className="row">
          <div className="">
            <CheckIcon />
          </div>
          <div
            className="pl-2 "
            style={{
              alignSelf: 'flex-end',
            }}
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="row">
          <div className="">
            <CheckIcon />
          </div>
          <div
            className="pl-2 "
            style={{
              alignSelf: 'flex-end',
            }}
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="row">
          <div className="">
            <CheckIcon />
          </div>
          <div
            className="pl-2 "
            style={{
              alignSelf: 'flex-end',
            }}
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
      <div className="c-infopage__promo">
        <div className="d-flex justify-content-between c-infopage__promo-title">
          <div className="">Includes Beyond+</div>
          <div className="">
            $1/mo.
            {/* (free) */}
          </div>
        </div>

        <div> * Mobile App powered by our AI "Quorra"</div>
        <div>* 24/7 VIP Support</div>
        <div>* Total scooter repair or replacement, no questions asked</div>
        <div>* Continuous Optimizations & Upgrades</div>
        <div>* Cancel Anytime</div>
      </div>
    </div>
  );
}
