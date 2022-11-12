import React from 'react';
import Section from '../Section';
import './Contact.scss';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Section name="Contact">
            <form onSubmit={handleSubmit}>
                <h1>Get in Touch</h1>
                <input type="text" placeholder="name" maxLength={50} />
                <input type="email" placeholder="email" maxLength={50} />
                <input type="text" placeholder="subject" maxLength={50} />
                <textarea type="text" placeholder="message" maxLength={500} />
                <button type="submit">Submit</button>
            </form>
        </Section>
    );
};

export default Contact;