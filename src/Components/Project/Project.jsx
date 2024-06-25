import React from 'react';
import './Project.scss';
import PropTypes from 'prop-types';
import arrow from '../../assets/img/icon/Reverse/icon-arrow-right.webp'
import iconGitHub from '../../assets/img/icon/Reverse/icon-github.webp'
import pb from '../../pocketbase'; 

const Project = ({ projectsData, onClickNext  }) => {

  const handleClickNext = async () => {
    onClickNext(projectsData.Projects);
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
          <div className="card__Subtitle">{projectsData.subtitle}</div>
          <div className="card__Description">{projectsData.description}</div>
          <img className="card__Next" src={arrow} alt="lire plus" width={15} height={15} onClick={handleClickNext}/>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectsData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    logo1: PropTypes.string.isRequired,
    logo2: PropTypes.string.isRequired,
    linkGitHub: PropTypes.string.isRequired,
  }).isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default Project;
