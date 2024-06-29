import React, { useRef, useState} from 'react';
import './Form.scss';
import sendLetter from "../../assets/img/icon/icon-letter-white.webp";
import pb from "../../pocketbase";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from '../../Services/emailConfig';

export default function Form() {
    const { t } = useTranslation();

    const [formState, setFormState] = useState({ nom: '', email: '', message: '' });
    const [message, setMessage] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await pb.collection('Forms').create(formState);
          setMessage('Formulaire envoyé, merci!');
          setFormState({ nom: '', email: '', message: '' });
      
          // Envoi de l'email
          const sendMail = await emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_USER_ID
        );

        if (sendMail.status === 200) {
            console.log('Email envoyé avec succès');
        } else {
            console.error('Erreur lors de l\'envoi de l\'email');
        }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error);
            setMessage('Erreur lors de l\'envoi du formulaire. Veuillez réessayer.');
        }
      };

    return (
        <form ref={formRef} onSubmit={(e) => handleSubmit(e, formState)} className="form">
            <label htmlFor="nom" className="label">{t('name')}</label>
            <input 
                type="text" 
                name="nom" 
                id="nom" 
                placeholder="Hello World" 
                required 
                className="input" 
                value={formState.nom}
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
                value={formState.email}
                onChange={handleChange}
            />
            <label htmlFor="message" className="label">Message</label>
            <textarea 
                name="message" 
                id="message" 
                placeholder="Hello World" 
                required 
                className="textarea"
                value={formState.message}
                onChange={handleChange}
            ></textarea>
            <div className="centerInput">
                <button 
                    type="submit" 
                    value="Envoyer" 
                    className="button"
                >
                    {t('sendForm')}
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
                <p>{t('orDirectlyTo')}</p>
                <address>
                <a
                    className="email__space"
                    href="mailto:alexis-brct@hotmail.fr"
                >
                    alexis-brct@hotmail.fr
                </a>
                </address>
            </div>
        </form>
    );
}
