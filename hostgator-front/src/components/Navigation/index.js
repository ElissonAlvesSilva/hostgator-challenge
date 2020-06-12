import React from 'react';
import hostgator from '../../../images/hostgator.svg';

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__content">
        <img src={hostgator} alt="hostgator logo" className="nav__logo" />
      </div>
    </div>
  );
}

export default Navigation;
