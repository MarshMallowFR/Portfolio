import React from 'react';

import './style.scss'

const Contact = () => {

    return(
        <div id="contact">
            <h2 id="contact-title">Contact me</h2>
            <form id="contact-form" method="POST" action="https://formspree.io/jeremie.aubeau@hotmail.com">
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Your email" />
                <textarea name="message" placeholder="Test Message">Enter your message</textarea>
                <button type="submit">Send Test</button>
            </form>
        </div>
    )
}

export default Contact;