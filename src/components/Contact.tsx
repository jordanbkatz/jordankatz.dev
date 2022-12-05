import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Section from './Section';

const Contact: React.FC = () => {
    interface IField {
        name: string;
        value: string;
    }
    const [fields, setFields] = useState<IField[]>([
        { name: 'name', value: '' },
        { name: 'email', value: '' },
        { name: 'subject', value: '' },
        { name: 'message', value: '' }
    ]);
    const [error, setError] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFields(fields.map(field => {
            return field.name === e.target.name ? { ...field, value: e.target.value } : field;
        }));
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('');
        if (fields.some(field => field.value === '')) return setError(true);
        setStatus('sending');
        try {
            await emailjs.sendForm('service_0mgji33', 'template_8j5uwlk', e.currentTarget, 'DOrPnWOF1jtkxR6LO');
            setFields(fields.map(field => { 
                return { ...field, value: '' };
            }));
            setError(false);
            setStatus('success');
        }
        catch (err) {
            setStatus('failed');
        }
    };
    return (
        <Section name="contact">
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