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

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="c-checkout row">
        <div className="c-checkout__left-side col-6">
          <InfoPage />
        </div>
        <div className="c-checkout__right-side  col-6">
          <ShoppingCard />
          <Card
            title={<div className="c-card__title">Rider Info</div>}
            bordered={false}
            className="c-card border-0"
          >
            <div className="pb-3">
              <div className="row c-card__input ">
                <div className="col-6">
                  <input className="c-input" placeholder="Email" />
                </div>
                <div className="col-6">
                  <input className="c-input" placeholder="Zip Code" />
                </div>
              </div>
            </div>
          </Card>
          <Elements stripe={stripePromise}>
            <PaymentCard config={config} />
          </Elements>
          {/* 
          <Elements stripe={stripePromise}>
            <FormCard config={config} />
          </Elements> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
