import React from 'react';
import { Icon, Input, TextArea, Button } from 'semantic-ui-react';

import './style.scss';

const Contact = () => (
    <div id="contact">
        <h2 id="contact-title">Contact me</h2>
        <form id="contact-form" method="POST" action="https://formspree.io/jeremie.aubeau@hotmail.com" >
            <Input type="text" name="name" placeholder="Your name" />
            <Input iconPosition='left' type="email" name="email" placeholder='Email'>
                <Icon name='at' />
                <input />
            </Input>
            <TextArea name="message" placeholder="Enter your message" />
            <Button type="submit" content="Send it" />
        </form>
    </div>
)


export default Contact;