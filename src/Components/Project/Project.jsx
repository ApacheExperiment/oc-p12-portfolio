import React, { useState } from 'react';
import './Project.scss';
import PropTypes from 'prop-types';
import arrow from '../../assets/img/icon/Reverse/icon-arrow-right.webp'
import iconGitHub from '../../assets/img/icon/Reverse/icon-github.webp'
import { useAuth } from '../../Services/AuthContext';
import iconDelete from '../../assets/img/icon/Initial/icon-delete.webp'
import iconDeleteReverse from '../../assets/img/icon/Reverse/icon-delete-Reverse.webp'
import { useTranslation } from 'react-i18next';
import pb from '../../pocketbase'; 

const Project = ({ projectsData, onClickNext, onDelete  }) => {
  const { t } = useTranslation();
  // Fonction appelée lorsqu'on clique sur la flèche pour voir plus de détails
  const handleClickNext = async () => {
    onClickNext(projectsData.Projects); // Appel de la fonction onClickNext avec l'ID du projet
  };

  const { isAuthenticated } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = async () => {
    console.log('Attempting to delete project with ID:', projectsData.id);
    try {
      await pb.collection('Thumbnails').delete(projectsData.id);
      await pb.collection('Projects').delete(projectsData.Projects); 
      onDelete(projectsData.id);
    } catch (error) {
      console.error('Erreur lors de la suppression du projet:', error);
    }
  };

  return (
    <div className="card">
      <div className="card__Container">
        <div className="card__imageWrapper">
          <img src={pb.getFileUrl(projectsData, projectsData.image)} alt="projet" width={300} height={300} className="card__Image" />
        </div>
        <div className="card__Content">
          <div className="card__Title">{projectsData.title}</div>
          <div className="card__logoWrapper">
            <img src={pb.getFileUrl(projectsData, projectsData.logo1)} alt="logo1" width={40} height={35} />
            <img src={pb.getFileUrl(projectsData, projectsData.logo2)} alt="logo2" width={40} height={35} />
            <a href={projectsData.linkGitHub} className="card__linkGitHub" target="_blank" rel="noopener noreferrer">
              <img src={iconGitHub} alt="GitHub" width={30} height={30} />
            </a>
          </div>
          <div className="card__Subtitle">{t(`${projectsData.subtitle}`)}</div>
          <div className="card__Description">{projectsData.description}</div>
          <img className="card__Next" src={arrow} alt="lire plus" width={15} height={15} onClick={handleClickNext}/>
          {isAuthenticated && (
          <div
          className="icon-delete-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleDelete}
        >
          <img
            src={iconDelete}
            alt="Supprimer un projet"
            className={`icon-delete ${isHovered ? 'hidden' : ''}`}
          />
          <img
            src={iconDeleteReverse}
            alt="Supprimer un projet - Survol"
            className={`icon-delete ${isHovered ? '' : 'hidden'}`}
          />
        </div>
        )}
        </div>
      </div>
    </div>
  );
};

// PropTypes pour valider les propriétés passées au composant
Project.propTypes = {
  projectsData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    logo1: PropTypes.string.isRequired,
    logo2: PropTypes.string.isRequired,
    linkGitHub: PropTypes.string.isRequired,
  }).isRequired,
  onClickNext: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Project;
