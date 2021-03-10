import React, { useEffect, useState } from 'react';

import ShoppingCard from './components/ShoppingCard';
import PaymentCard from './components/PaymentCard';
import InfoPage from './components/InfoPage';
import { getAPIkeys } from './utils/stripe';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import SuccessPayment from './components/successPayment';
import RiderCard from './components/RiderCard';

const App = () => {
  const [stripePromise, setstripePromise] = useState(null);
  const [stripeResponse, setStripeResponse] = useState(null);
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [config, setconfig] = useState({
    publishableKey: '',
    productId: '',
    priceId: '',
    preOrderPriceId: '',
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
      <RiderCard
        newsletter={newsletter}
        zipcode={zipcode}
        email={email}
        setNewsletter={setNewsletter}
        setZipcode={setZipcode}
        setEmail={setEmail}
      />
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

  return (
    <React.Fragment>
      <Navbar />
      <div className="c-checkout row">
        <div className="c-checkout__left-side col-md-6 col-xs-12 ">
          <InfoPage />
        </div>
        <div
          className="c-checkout__right-side   col-md-6 col-xs-12 "
          id="right-side"
        >
          <div className="mobile-view">
            {rightSide1}
            {stripeResponse === 'success' && <SuccessPayment />}
          </div>
          <div className="web-view">
            {stripeResponse !== 'success' && rightSide1}
            {stripeResponse === 'success' && <SuccessPayment />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
