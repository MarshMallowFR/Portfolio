import React from 'react';

import cinqmap from '../../images/5map.png';
import './style.scss';

const Work = () => (
    <div id="work">
        <div id="work-links">
            <div className="row">
                <img className="work-link" src={cinqmap} alt="logo 5 minutes à perdre"/>
                <img className="work-link" src={cinqmap} alt="logo 5 minutes à perdre"/>
            </div>
            <div className="row">
                <img className="work-link" src={cinqmap} alt="logo 5 minutes à perdre"/>
            </div>
        </div>
        <h1 id="work-title">My Work</h1>
    </div>
);

export default Work;