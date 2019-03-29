import React from 'react';
import { Icon } from 'semantic-ui-react';

import './style.scss';

const About = () => (
    <div id="about">
        <div id="about-text">
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora, ipsa rem, possimus labore doloribus qui impedit necessitatibus voluptatum dolores architecto ullam, itaque obcaecati voluptatibus praesentium porro molestiae nemo vero! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sapiente temporibus dicta veritatis nesciunt neque expedita dolor, praesentium veniam ipsum! Similique repellendus necessitatibus reprehenderit minima harum ut porro consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta consectetur, ipsam dolore tempora impedit vitae ratione ut labore. Eum quaerat cumque alias quod ex!</p>
            <div id="about-text-icons">
                <a href="https://www.linkedin.com/in/jeremie-aubeau/" target="_blank"><Icon name="linkedin" size="big" /></a>
                <a href="#" target="_blank"><Icon name="file alternate outline" size="big" /></a>
            </div>
        </div>
    </div>
);

export default About;