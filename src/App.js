import React, { useEffect, useState } from 'react';
import logo1 from './assets/img/logo1.png';
import { ArrowLeftOutlined } from '@ant-design/icons';
import FormCard from './components/formCard';
import ShoppingCard from './components/ShoppingCard';
import PaymentCard from './components/PaymentCard';
import DeliveryCard from './components/DeliveryCard';
import InfoPage from './components/InfoPage';
import { getAPIkeys } from './utils/stripe';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import { Card } from 'antd';

const App = () => {
  const [stripePromise, setstripePromise] = useState(
    loadStripe('pk_test_1XPhRvBHCislCDxFaYm3HR97')
  );
  const [stripeResponse, setStripeResponse] = useState(null);
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [showRight, setShowRight] = useState(false);
  const [config, setconfig] = useState({
    publishableKey: 'pk_test_1XPhRvBHCislCDxFaYm3HR97',
    productID: '',
    priceID: '',
    PreOrderPriceId: '',
  });

  const getConfigKeys = async () => {
    const result = await getAPIkeys();
    if (result) {
      setconfig(result);
      setstripePromise(loadStripe(result.publishableKey));
    }
  };

  useEffect(() => {
    getConfigKeys();
  }, []);

  const rightSide1 = (
    <div className={'transit'}>
      <ShoppingCard />
      <Card
        title={<div className="c-card__title">Rider Info</div>}
        bordered={false}
        className="c-card border-0"
      >
        <div className="pb-3">
          <div className="row c-card__input ">
            <div className="col-6">
              <input
                className="c-input"
                placeholder="Email"
                name="email"
                value={email.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                name="zipcode"
                className="c-input"
                placeholder="Zip Code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Card>
      <Elements stripe={stripePromise}>
        <PaymentCard
          config={config}
          setStripeResponse={setStripeResponse}
          email={email}
          zipcode={zipcode}
        />
      </Elements>
    </div>
  );

  const rightSide2 = (
    <div
      id="right-side-success"
      className=" transit c-checkout__right-side-success "
    >
      <div className="c-checkout__right-side-success-title">
        Your subscription has successfully processed!
      </div>
      <div className="c-checkout__right-side-success-subtitle">What Next?</div>
      <div className="c-checkout__right-side-success-content">
        1. Download the<a href="#app"> Beyond iPhone app</a>
      </div>
      <div className="c-checkout__right-side-success-content">
        2. Check your email to begin your <a href="#on"> onboarding</a>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="c-checkout row">
        <div className="c-checkout__left-side col-md-6 col-xs-12">
          <InfoPage setShowRight={setShowRight} />
        </div>
        <div
          className="c-checkout__right-side   col-md-6 col-xs-12 "
          id="right-side"
        >
          {showRight && stripeResponse !== 'success' && rightSide1}
          {showRight && stripeResponse === 'success' && rightSide2}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
