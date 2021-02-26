import BK_1 from './assets/img/img1.png';
import logo2 from './assets/img/logo2.png';
import lock from './assets/img/lock.png';
import CreditCard from './assets/img/CreditCard.png';

const location = window.location;

export const getShoppingContent = () => {
  const path = location.pathname;
  console.log(path);
  const content = {
    reservation: {
      cardContent: [
        {
          name: (
            <div>
              <div>Reservation Fee ($1) - shipping in March</div>
              <div className="pleft-5">– $49/mo. plan</div>
              <div className="pleft-5">– $50 one-time set-up</div>
            </div>
          ),
          image: BK_1,
          cost: 1,
          disabled: false,
        },
        {
          name: (
            <div>
              <div>Beyond Premiere - free for 6 months (normally $19/mo.)</div>
              <div className="pleft-5"> – Smart Lock</div>
              <div className="pleft-5"> – 24/7 Support</div>
              <div className="pleft-5">
                {' '}
                – Local Maintenance, no questions asked
              </div>
              <div className="pleft-5">
                {' '}
                – Free scooter repair or replacements, no questions asked
              </div>
              <div className="pleft-5"> – Theft Insurance</div>
              <div className="pleft-5"> – GPS Tracking</div>
              <div className="pleft-5">
                {' '}
                – Exclusive member events and rides
              </div>
              <div className="pleft-5">
                {' '}
                – Member-only discounts from top brands (coming soon){' '}
              </div>
            </div>
          ),
          image: CreditCard,
          cost: 0,
          disabled: true,
        },
      ],
      footerConten: [
        '* Monhtly subscription of $49/mo. will begin at time of pickup',
        '** Pickup available at Beyond HQ (368 Broadway, New York, NY 10013)',
      ],
    },
    noSetupFee: {
      cardContent: [
        {
          name: (
            <div>
              <div>Reservation Fee ($1) - shipping in March</div>
              <div className="pleft-5">– $49/mo. plan</div>
            </div>
          ),
          image: BK_1,
          cost: 1,
          disabled: false,
        },
        {
          name: (
            <div>
              <div>Spring Promotion - $0 set-up fee (normally $50)</div>
            </div>
          ),
          image: logo2,
          cost: 0,
          disabled: true,
        },
        {
          name: (
            <div>
              <div>Beyond Premiere - free for 6 months (normally $19/mo.)</div>
              <div className="pleft-5"> – Smart Lock</div>
              <div className="pleft-5"> – 24/7 Support</div>
              <div className="pleft-5">
                {' '}
                – Local Maintenance, no questions asked
              </div>
              <div className="pleft-5">
                {' '}
                – Free scooter repair or replacements, no questions asked
              </div>
              <div className="pleft-5"> – Theft Insurance</div>
              <div className="pleft-5"> – GPS Tracking</div>
              <div className="pleft-5">
                {' '}
                – Exclusive member events and rides
              </div>
              <div className="pleft-5">
                {' '}
                – Member-only discounts from top brands (coming soon){' '}
              </div>
            </div>
          ),
          image: CreditCard,
          cost: 0,
          disabled: true,
        },
      ],
      footerConten: [
        '* Monhtly subscription of $49/mo. will begin at time of pickup',
        '** Pickup available at Beyond HQ (368 Broadway, New York, NY 10013)',
      ],
    },
    marchPromo: {
      cardContent: [
        {
          name: (
            <div>
              <div>Reservation Fee ($1) - shipping in March</div>
              <div className="pleft-5">– $49/mo. plan</div>
              <div className="pleft-5">– $50 one-time set-up</div>
            </div>
          ),
          image: BK_1,
          cost: 1,
          disabled: false,
        },
        {
          name: (
            <div>
              <div>Spring Promotion - One free month* ($49 value)</div>
            </div>
          ),
          image: logo2,
          cost: 0,
          disabled: true,
        },
        {
          name: (
            <div>
              <div>Beyond Premiere - free for 6 months (normally $19/mo.)</div>
              <div className="pleft-5"> – Smart Lock</div>
              <div className="pleft-5"> – 24/7 Support</div>
              <div className="pleft-5">
                {' '}
                – Local Maintenance, no questions asked
              </div>
              <div className="pleft-5">
                {' '}
                – Free scooter repair or replacements, no questions asked
              </div>
              <div className="pleft-5"> – Theft Insurance</div>
              <div className="pleft-5"> – GPS Tracking</div>
              <div className="pleft-5">
                {' '}
                – Exclusive member events and rides
              </div>
              <div className="pleft-5">
                {' '}
                – Member-only discounts from top brands (coming soon){' '}
              </div>
            </div>
          ),
          image: CreditCard,
          cost: 0,
          disabled: true,
        },
      ],
      footerConten: [
        ' * Monhtly subscription of $49/mo. will begin at time of pickup',
        '* Free month promotion is for second full paid month',
        '** Pickup available at Beyond HQ (368 Broadway, New York, NY 10013)',
      ],
    },
  };

  if (path === '/reservation') return content.reservation;
  else if (path === '/no-setup-fee') return content.noSetupFee;
  else if (path === '/march-promo') return content.marchPromo;

  return content.reservation;
};
