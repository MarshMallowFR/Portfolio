import React from 'react';

import Box from './Box';
import './style.scss';

const Skills = () => (
  <div id="skills">
    <h1>My skills</h1>
    <div id="skills-boxes">
      <div id="skills-boxes-firstRaw">
        <Box title="HTML" />
        <Box title="CSS" />
      </div>
      <div id="skills-boxes-firstRaw">
        <Box title="JavaScript" />
        <Box title="PHP" />
        <Box title="NodeJS" />
      </div>
      <div id="skills-boxes-secondRaw">
        <Box title="GIT / GitHub" />
        <Box title="SASS" />
        <Box title="MySQL" />
        <Box title="Axios" />
        <Box title="ES6" />
      </div>
      <div id="skills-boxes-thirdRaw">
        <Box title="ReactJs" />
        <Box title="Redux" />
        <Box title="Agile" />
      </div>
      <div id="skills-boxes-firstRaw">
        <Box title="NestJS" />
          <Box title="GatsbyJS" />
      </div>
    </div>
  </div>
);

export default Skills;