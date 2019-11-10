// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react";
import { Icon } from 'semantic-ui-react';

import './style.scss';

const Footer = () => (
  <div id="footer">
    <div id="footer-contact">
      <p>Jeremie Aubeau <br/> Mob: 0033.(6).09.93.34.60 <br/> Email: jeremie.aubeau@hotmail.com</p>
    </div>
    <div id="footer-copyright">Copyright © 2019 Jeremie Aubeau</div>
    <div id="footer-socialNetworks">
      <a href="https://www.linkedin.com/in/jeremie-aubeau/" target="_blank" rel= "noopener noreferrer"><Icon name="linkedin" size="big" /></a>
      <a href="https://github.com/MarshMallowFR" target="_blank" rel= "noopener noreferrer"><Icon name="github" size="big" /></a>
      <a href="https://twitter.com/FrMallow" target="_blank" rel= "noopener noreferrer"><Icon name="twitter" size="big" /></a>
    </div>
  </div>
)
export default Footer