import React, { useState } from 'react';
import BK_1 from '../assets/img/BK_1.png';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.jpg';
import img7 from '../assets/img/img7.jpg';
import { CheckIcon } from '../assets/Icons/CustomIcons';
import { Image } from 'antd';

export default function InfoPage() {
  const [selectedImage, setSelectedImage] = useState(1);
  const infoImages = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
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
        {Object.keys(infoImages).map((imgNo, index) => (
          <div
            key={index}
            className="c-infopage__image-selection-img"
            onClick={() => setSelectedImage(imgNo)}
          >
            <img src={infoImages[imgNo]} alt="img" />
          </div>
        ))}
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
