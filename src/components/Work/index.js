import React from 'react';

import cinqmap from '../../images/5map.png';
import fitiyoo from '../../images/fitiyoo.png';
import './style.scss';

const Work = () => (
    <div id="work">
        <h1 id="work-title">My Work</h1>
        <div id="work-links">
            <a href="https://www.5map.fr/">
                <div className="view link">
                    <img src={cinqmap} alt="logo 5 minutes à perdre"/>
                    <div className="mask"></div>
                    <div className="content">
                        <h3>5 Minutes à perdre</h3>
                        <p>Cette application est un projet ludique</p>
                    </div>
                </div>
            </a>
            <a href="https://www.fitiyoo.com/">
                <div className="view link">
                    <img src={fitiyoo} alt="logo fitiyoo"/>
                    <div className="mask"></div>
                    <div className="content">
                        <h3>Fitiyoo</h3>
                        <p>Site under construction</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
);

export default Work;