import React, { useState } from 'react';

import img1 from '../assets/img/img1Full.png';
import img2 from '../assets/img/img2.png';

import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.png';
import image3 from '../assets/img/img5.jpg';

import { CheckIcon } from '../assets/Icons/CustomIcons';
import { Image } from 'antd';

export default function InfoPage() {
  const [selectedImage, setSelectedImage] = useState(1);
  const infoImages = {
    1: image1,
    2: image2,
    3: image3,
  };
  const infoImagesTab = {
    1: img1,
    2: img2,
    3: image3,
  };

  return (
    <div className="c-infopage-wrapper">
      <h2 className="c-infopage__title">SV1 Electric Scooter</h2>
      <div className="c-infopage__subtitle font-weight-bold">
        <a href="#right-side">
          <span className=" web-view" block>
            Reserve now for $1
          </span>
          <span className="mobile-view" block>
            Reserve now for $1
          </span>
        </a>
        {'  '}(arrives in March)
      </div>

      <p className="">$49/mo. plan + Beyond Premiere free for 6 months</p>
      <div className="c-infopage__image-wrapper">
        <Image src={infoImages[selectedImage]} alt="asd" />
      </div>
      <div className="c-infopage__image-selection-wrapper">
        {Object.keys(infoImages).map((imgNo, index) => (
          <div
            key={index}
            className={`c-infopage__image-selection-img ${
              imgNo === selectedImage &&
              'c-infopage__image-selection-img--active'
            }`}
            onClick={() => setSelectedImage(imgNo)}
          >
            <img src={infoImagesTab[imgNo]} alt="img" />
          </div>
        ))}
      </div>

      <div className="c-infopage__description-title">Description</div>
      <p className="c-infopage__description">
        The SV1 Electrcic Scooter integrates seamlessly with public
        transportation and comes Quorra-ready. With 15 miles of range per
        battery, 25 mph top speed, airless tires and weighing less than 26 lbs –
        it easily folds so you can travel wherever the road takes you. There is
        a one time set-up fee of $50 for new riders.
      </p>
      <div>
        <div className="row">
          <div className="">
            <CheckIcon />
          </div>
          <div
            className="pl-2 font-weight-bold"
            style={{
              alignSelf: 'flex-end',
            }}
          >
            month-to-month; cancel anytime
          </div>
        </div>
        <div className="row">
          <div className="">
            <CheckIcon />
          </div>
          <div
            className="pl-2 font-weight-bold"
            style={{
              alignSelf: 'flex-end',
            }}
          >
            VIP same-day service & maintenance
          </div>
        </div>
        <div className="row">
          <div className="">
            <CheckIcon />
          </div>
          <div
            className="pl-2 font-weight-bold"
            style={{
              alignSelf: 'flex-end',
            }}
          >
            arrives in March
          </div>
        </div>
      </div>
      <div className="c-infopage__description-title mt-3">Now Includes</div>

      <div className="c-infopage__promo">
        <div className="d-flex justify-content-between c-infopage__promo-title">
          <div className="">Beyond Premiere</div>
          <div className="c-infopage__promo-title-right">
            <span>free for 6 months</span>
          </div>
        </div>

        <div className="c-infopage__promo-point"> * Smart Lock</div>
        <div className="c-infopage__promo-point"> * 24/7 Support</div>
        <div className="c-infopage__promo-point">
          {' '}
          * Local Maintenance, no questions asked
        </div>
        <div className="c-infopage__promo-point">
          {' '}
          * Free scooter repair or replacements, no questions asked
        </div>
        <div className="c-infopage__promo-point"> * Theft Insurance</div>
        <div className="c-infopage__promo-point"> * GPS Tracking</div>
        <div className="c-infopage__promo-point">
          {' '}
          * Exclusive member events and rides
        </div>
        <div className="c-infopage__promo-point">
          {' '}
          * Member-only discounts from top brands (coming soon)
        </div>
      </div>
    </div>
  );
}
