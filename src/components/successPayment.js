import React from 'react';

export default function successPayment() {
  return (
    <div
      id="right-side-success"
      className=" transit1 c-checkout__right-side-success "
    >
      <div className="c-checkout__right-side-success-title">
        Your subscription has successfully processed!
      </div>
      <div className="c-checkout__right-side-success-subtitle">What Next?</div>
      <div className="c-checkout__right-side-success-content">
        1. Download the
        <a href="https://apps.apple.com/app/id1543945606"> Beyond iPhone app</a>
      </div>
      <div className="c-checkout__right-side-success-content">
        2. Check your email to begin your{' '}
        <a href="https://help.ridebeyond.com/en/articles/4576251-quick-start-guide-sv1-electric-scooter">
          {' '}
          onboarding
        </a>
      </div>
    </div>
  );
}
