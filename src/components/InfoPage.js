import React, { useState } from 'react';
// import BK_1 from '../assets/img/BK_1.png';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
// import img3 from '../assets/img/img3.jpg';
// import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
// import img6 from '../assets/img/img6.jpg';
// import img7 from '../assets/img/img7.jpg';
import lock from '../assets/img/lock.png';
import { CheckIcon } from '../assets/Icons/CustomIcons';
import { Image } from 'antd';

export default function InfoPage({ setShowRight }) {
  const [selectedImage, setSelectedImage] = useState(1);
  const infoImages = {
    1: img1,
    2: img2,
    3: img5,
  };

  return (
    <div className="c-infopage-wrapper">
      <h2 className="c-infopage__title">SV1 Electric Scooter</h2>
      <div className="c-infopage__subtitle font-weight-bold">
        $59/mo.<span> (reserve now for only $1)</span>
      </div>
      <div className="c-infopage__image-wrapper">
        <Image src={infoImages[selectedImage]} alt="asd" />
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
        The SV1 Electrcic Scooter integrates seamlessly with public
        transportation and comes Quorra-ready. With 15 miles of range per
        battery, 28 km/h top speed, airless tires and weighing less than 26 lbs
        – it easily folds so you can travel wherever the road takes you.
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
            $0 set-up fee (normally $50)
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
      </div>
      <div className="c-infopage__description-title mt-3">Includes</div>

      <div className="c-infopage__promo">
        <div className="d-flex justify-content-between c-infopage__promo-title">
          <div className="">Beyond Premium</div>
          <div className="">
            (free for 6 months)
            {/* (free) */}
          </div>
        </div>

        <div>– Mobile App powered by our AI "Quorra"</div>
        <div>– 24/7 VIP Support</div>
        <div>– Total scooter repair or replacement, no questions asked</div>
        <div>– Continuous Optimizations & Upgrades</div>
        <div>– Cancel Anytime</div>
        <div>– Discount on accesories (coming soon)</div>
      </div>
      <div className="c-infopage__promo">
        <div className="d-flex justify-content-between c-infopage__promo-title">
          <div className="">Integrated Smart Lock </div>
          <div className="">(free for new riders)</div>
        </div>
        <div className="row">
          <div className="col-3">
            <img src={lock} alt="lock" width="100%" height="100%" />
          </div>
          <div className="col-9">
            <div> – GPS tracking; easily find your scooter</div>
            <div> – Theft protection</div>
            <div> – Control from the Beyond mobile app</div>
            <div> – Quorra-ready</div>
          </div>
        </div>
      </div>

      <div className="c-card__btn-wrapper">
        {/* c-checkout */}
        <a href="#right-side">
          <button
            className="c-card__btn"
            onClick={() => {
              // window.scrollTo({
              //   top: 0,
              //   behavior: 'smooth',
              // });

              setTimeout(() => setShowRight(true), 350);

              // setTimeout(
              //   () =>
              //     window.scrollBy({
              //       top: 100,
              //       behavior: 'smooth',
              //     }),
              //   600
              // );
            }}
            block
          >
            Reserve for $1
          </button>
        </a>
      </div>
    </div>
  );
}
