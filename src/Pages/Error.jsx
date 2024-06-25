import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="notFound">
      <h1 className="title">404 - Page Not Found</h1>
      <p className="message">La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="homeLink">
        <p>Retourner à la page d'accueil</p>
      </Link>
    </div>
  );
};
