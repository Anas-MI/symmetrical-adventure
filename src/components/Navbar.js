import React from 'react';
import { ShoppingIcon } from '../assets/Icons/CustomIcons';
import Ellipse25 from '../assets/img/Ellipse25.png';
import logo_nav from '../assets/img/logo_nav.png';
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light c-navbar">
      <a class="navbar-brand" href="/">
        <img src={logo_nav} alt={'logo'} />
      </a>
    </nav>
  );
}
