import React, { useEffect, useState, useRef } from 'react';
import './Projects.scss';
import Project from '../../Components/Project/Project';
import add from '../../assets/img/icon/Initial/icon-add.webp'
import addReverse from '../../assets/img/icon/Reverse/icon-add-Reverse.webp'
import pb from '../../pocketbase';
import { useAuth } from '../../Services/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 
const Projects = () => {
  const { t } = useTranslation();
  // États pour stocker les projets et le projet sélectionné
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // Pour stocker le projet sélectionné
  const selectedProjectRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  // Utilisation de useEffect pour récupérer les projets lors du montage du composant
  useEffect(() => {
    async function fetchProjects() {
      try {
        const records = await pb.collection('Thumbnails').getFullList({
          expand: 'project_id',
          sort: '-updated'
        });
        console.log('Records de PocketBase:', records);
        setProjects(records);
      } catch (error) {
        if (error.response) {
          
        }
      }
    }

    fetchProjects();
  }, []);

  // Gestion des clics en dehors de selectedProject__border pour fermer le projet sélectionné
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectedProjectRef.current && !selectedProjectRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    }

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  // Gestionnaire de clic pour naviguer vers la page d'ajout de projet
  const handleClickNext = async (projectId) => {
    try {
      // Fetch des détails du projet correspondant dans la collection Projects
      const projectDetails = await pb.collection('Projects').getFirstListItem(`id='${projectId}'`, { expand: 'project_id' });
      setSelectedProject(projectDetails);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du projet:', error);
    }
  };

  const handleAddClick = () => {
    navigate('/add');
  };

  const handleDelete = (projectId) => {
    setProjects((prevProjects) => prevProjects.filter(project => project.id !== projectId));
  };

  return (
    <section id="projects" className="projects">
      <div className="title-icon-wrap">
        <h2 className="projects__Title">{t('projectsTitle')}</h2>
        {isAuthenticated && (
          <div
          className="icon-add-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleAddClick}
        >
          <img
            src={add}
            alt="Ajouter un projet"
            className={`icon-add ${isHovered ? 'hidden' : ''}`}
          />
          <img
            src={addReverse}
            alt="Ajouter un projet - Survol"
            className={`icon-add ${isHovered ? '' : 'hidden'}`}
          />
        </div>
        )}
      </div>
      <div className="projects__Container">
        {projects.map((project, index) => (
          <div className="allProjects" key={index}>
            <Project projectsData={project} onClickNext={handleClickNext} onDelete={handleDelete}/>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="selectedProject">
          <h3 className="selectedProject__Title">{selectedProject.title}</h3>
          <div className="selectedProject__border" ref={selectedProjectRef}>
            <a href={selectedProject.linkGitHub} target="_blank" rel="noopener noreferrer"> 
              <img
                className="img"
                src={pb.getFileUrl(selectedProject, selectedProject.project_home)}
                alt={selectedProject.title}
              />
            </a>
            <p>{selectedProject.descriptif}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;