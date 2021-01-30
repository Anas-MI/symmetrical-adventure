import React from 'react';
import { ShoppingIcon } from '../assets/Icons/CustomIcons';
import Ellipse25 from '../assets/img/Ellipse25.png';
import logo_nav from '../assets/img/logo_nav.png';
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light c-navbar">
      <a class="navbar-brand" href="/">
        <img src={logo_nav} alt={'logo'} width="110" />
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class=" c-navbar__nav-item nav-item active">
            <a class="nav-link" href="/">
              SV1 Elerctric Scooter <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="c-navbar__nav-item nav-item">
            <a class="nav-link" href="/">
              How It Works
            </a>
          </li>

          <li class=" c-navbar__nav-item nav-item">
            <a class="nav-link " href="/">
              Test Ride
            </a>
          </li>
          <li class=" c-navbar__nav-item nav-item">
            <a class="nav-link " href="/">
              On Sustainability
            </a>
          </li>
        </ul>
        <div class="float-right">
          <div className="row c-navbar-right">
            <div className="col">$69/mo. </div>
            <div className="col c-navbar-right__bag ">
              <ShoppingIcon />
            </div>
            <div className="col text-right">
              <div className="c-navbar-right__message ">Hello</div>
              <div>CameronSchiller</div>
            </div>
            <div className="col">
              <img src={Ellipse25} alt={'logo'} height="35" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
