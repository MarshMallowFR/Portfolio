// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import { Icon } from 'semantic-ui-react';

import './style.scss';

const Navigation = () => (
  <div id="header-navigation">
    <ul>
      <a href="#about"><li>About me</li></a>
      <a href="#skills"><li>Skills</li></a>
      <a href="#story"><li>Story</li></a>
      <a href="#work"><li>Work</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
)
export default Navigation
