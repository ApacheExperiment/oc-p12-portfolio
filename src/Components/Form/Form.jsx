import React, {useState} from 'react';
import './Form.scss';
import sendLetter from "../../assets/img/icon/icon-letter-white.webp";
import pb from "../../pocketbase";

export default function Form() {
    const [formState, setFormState] = useState({ nom: '', email: '', message: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await pb.collection('Forms').create(formState);
            setMessage('Formulaire envoyé, merci!');
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Erreur lors de l','envoi du formulaire. Veuillez réessayer.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="nom" className="label">Nom</label>
            <input 
                type="text" 
                name="nom" 
                id="nom" 
                placeholder="Hello World" 
                required 
                className="input" 
                onChange={handleChange}
            />
            <label htmlFor="email" className="label">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="hello@world.com" 
                required 
                className="input" 
                onChange={handleChange}
            />
            <label htmlFor="message" className="label">Message</label>
            <textarea 
                name="message" 
                id="message" 
                placeholder="Hello World" 
                required 
                className="textarea"
                onChange={handleChange}
            ></textarea>
            <div className="centerInput">
                <button 
                    type="submit" 
                    value="Envoyer" 
                    className="button"
                >
                    Envoyer
                    <img 
                        src={sendLetter} 
                        alt="send icon" 
                        width={20} 
                        height={20} 
                        className="iconSend"
                    />
                </button>
            </div>
            {message && <p className="validation">{message}</p>}
            <div className="email">
                <p>Ou bien directement à</p>
                <address>
                <a
                    className="email__space"
                    href="mailto:alexis-brct@hotmail.fr"
                >
                    alexis-bct@hotmail.fr
                </a>
                </address>
            </div>
        </form>
    );
}
