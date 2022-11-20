import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Section from './Section';

function Contact() {
    const initialFields = [
        { name: 'name', value: '' },
        { name: 'email', value: '' },
        { name: 'subject', value: '' },
        { name: 'message', value: '' }
    ];
    const [fields, setFields] = useState(initialFields);
    const [error, setError] = useState(false);
    const [status, setStatus] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('');
        if (fields.some(field => field.value === '')) return setError(true);
        setStatus('sending');
        try {
            await emailjs.sendForm('service_0mgji33', 'template_8j5uwlk', e.currentTarget, 'DOrPnWOF1jtkxR6LO');
            e.currentTarget.reset();
            setFields(initialFields);
            setError(false);
            setStatus('success');
        }
        catch (err) {
            setStatus('failed');
        }
    };
    return (
        <Section name="Contact">
            <form onSubmit={handleSubmit}>
                <h1>Get in Touch</h1>
                {fields.map(({ name, value }) => (
                    <div className="field" key={name}>
                        {(name === 'message') ?
                            <textarea name={name} placeholder={name} maxLength={500} onChange={handleChange} />
                        :
                            <input type="text" name={name} placeholder={name} maxLength={50} onChange={handleChange} />
                        }
                        {(error && value === '') ? (
                            <div className="error">
                                <FaExclamationTriangle className="icon" />
                                <p>Please fill out this field!</p> 
                            </div>
                        ) : null}
                    </div>
                ))}
                <button type="submit">{(status === 'sending') ? "Sending" : "Submit"}</button>
                {(status === 'success') ? (
                    <div className="error">
                        <FaCheckCircle className="icon" />
                        <p>Sent!</p>
                    </div>
                ) : null}
                {(status === 'failed') ? (
                    <div className="error">
                        <FaExclamationTriangle className="icon" />
                        <p>Failed to send!</p> 
                    </div>
                ) : null}
            </form>
        </Section>
    );
}

export default Contact;