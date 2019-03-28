// import PropTypes from "prop-types";
import React from "react";
import { Icon } from 'semantic-ui-react';

import Logo from './Logo';
import Navigation from './Navigation';
import Welcome from './Welcome';
import './style.scss';

const Header = () => (
  <div id="header">
    <Logo />
    <Navigation />
    <Welcome />
    <a href="#about" id="header-icon"><Icon name="chevron down" size="huge" /></a>
  </div>
)
export default Header
