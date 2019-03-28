import React from 'react';

import './style.scss';

const Story = () => (
    <div id="story">
        <h2 id="story-title">My story</h2>
        <div id="story-timeline">
            <ul>
                <li>
                    <div className="timeline-content">
                        <h3 className="timeline-content-subtitle">Oclock</h3>
                        <p id="timeline-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus deserunt, quos magnam iusto vitae doloremque repellendus quia similique voluptatibus at itaque eum. Labore ut neque praesentium numquam velit enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa reprehenderit voluptatibus reiciendis aliquam dolores officia similique ducimus sit. Voluptatum perspiciatis iste ea optio maiores ipsam saepe cum porro minus.</p>
                    </div>
                    <div className="timeline-content-year">
                        <h4>Septembre 2018 / Février 2019</h4>
                    </div>
                </li>
                <li>
                    <div className="timeline-content">
                        <h3 className="timeline-content-subtitle">Action Freight Services</h3>
                        <p id="timeline-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus deserunt, quos magnam iusto vitae doloremque repellendus quia similique voluptatibus at itaque eum. Labore ut neque praesentium numquam velit enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis magnam quo alias explicabo, nostrum nam. Eligendi aperiam, ratione tempora tempore enim consequatur quia a incidunt error maiores nam. Ducimus? </p>
                    </div>
                    <div className="timeline-content-year">
                        <h4>August 2007 / November 2017</h4>
                    </div>
                </li>
                <li>
                    <div className="timeline-content">
                        <h3 className="timeline-content-subtitle">DUT Gestion Logistique et Transport</h3>
                        <p id="timeline-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus deserunt, quos magnam iusto vitae doloremque repellendus quia similique voluptatibus at itaque eum. Labore ut neque praesentium numquam velit enim! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic excepturi nostrum vel tempore et dolorem unde corporis delectus libero maxime provident aliquid minima iusto atque quos vero non, quidem dolore? </p>
                    </div>
                    <div className="timeline-content-year">
                        <h4>September 2005 / June 2007</h4>
                    </div>
                </li>
            </ul>
        </div>

    </div>
);

export default Story;