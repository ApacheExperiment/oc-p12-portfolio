import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './Welcome.scss';
import Button from '../Button/Button'; 
import profile from "../../assets/img/test.png";
import githubLogo from "../../assets/img/icon/Initial/icon-github-reverse.webp";
import githubLogoReverse from "../../assets/img/icon/Reverse/icon-github.webp";
import linkedinLogo from "../../assets/img/icon/Initial/icon-linkedin-reverse.webp";
import linkedinLogoReverse from "../../assets/img/icon/Reverse/icon-linkedin.webp";
import Fcc from "../../assets/img/icon/Initial/icon-FCC.webp"
import FccReverse from "../../assets/img/icon/Reverse/icon-FCC-Reverse.webp"
import CIG from "../../assets/img/icon/Initial/icon-Codingame.webp"
import CIGReverse from "../../assets/img/icon/Reverse/icon-Codingame-Reverse.webp"
import Logout from '../../assets/img/icon/Initial/icon-logout.png';
import Login from '../../assets/img/icon/Reverse/icon-login-blue.png';
import { useAuth } from '../../Service/AuthContext';

export default function Welcome() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <section className="hello">
      <div className="authIcons">
              {isAuthenticated ? (
                <img
                  src={Login}
                  alt="Login icon"
                  width={20}
                  height={20}
                  className="iconLog"
                  onClick={logout}
                />
              ) : (
                <a href="/login">
                  <img
                    src={Logout}
                    alt="Logout icon"
                    width={20}
                    height={20}
                    className="iconLog"
                  />
                </a>
              )}
      </div>
      <img  src={profile} alt="profile" width={150} height={150} className="borderPicture" />
      <h1 className="title">
        Alexis
        Bréchet
      </h1>
      <h2 className="subtitle">Développeur Front-End</h2>
      <div className="links">
        <div className="iconContainer">
          <div className="iconWrapper">
            <a href="https://github.com/ApacheExperiment" target="_blank" rel="noopener noreferrer">
              <img 
                src={githubLogo}
                alt="Github logo"
                width={28}
                height={28}
                className="iconInitial icon"
              />
              <img 
                src={githubLogoReverse} 
                alt="Github logo"
                width={28}
                height={28}
                className="iconReverse icon"
              />
            </a>
          </div>
          <div className="iconWrapper">
            <a href="https://www.linkedin.com/in/alexis-br%C3%A9chet-52b972193/" target="_blank" rel="noopener noreferrer">
              <img 
                src={linkedinLogo}
                alt="Linkedin logo"
                width={30}
                height={30}
                className="iconInitial icon"
              />
              <img 
                src={linkedinLogoReverse} 
                alt="Linkedin logo"
                width={30}
                height={30}
                className="iconReverse icon"
              />
            </a>
          </div>
          <div className="iconWrapper">
            <a href="https://www.freecodecamp.org/Apache_Macadam" target="_blank" rel="noopener noreferrer">
              <img 
                src={Fcc}
                alt="Free code camp logo"
                width={30}
                height={30}
                className="iconInitial icon"
              />
              <img 
                src={FccReverse} 
                alt="Free code camp logo"
                width={30}
                height={30}
                className="iconReverse icon"
              />
            </a>
          </div>
          <div className="iconWrapper">
            <a href="https://www.codingame.com/profile/e7172dd54014f237bdc855f0ddf85ff33717495" target="_blank" rel="noopener noreferrer">
              <img 
                src={CIG}
                alt="Free code camp logo"
                width={25}
                height={25}
                className="iconInitial icon"
              />
              <img 
                src={CIGReverse} 
                alt="Free code camp logo"
                width={25}
                height={25}
                className="iconReverse icon"
              />
            </a>
          </div>
        </div>
        <Button />
      </div>
      
      <div className="border">
        <p className="aboutP">
          Après avoir travaillé pendant plusieurs années dans le milieu du commerce, principalement dans le milieu culturel et les bars spécialisés brassicole. En expérimentant plusieurs postes dont chef d'équipe et de patron associé.<br />
          <br />J'ai commencé mon apprentissage dans le domaine du développement front-end au sein d'Open Class Rooms sur mon temps libre et j'ai compris très rapidement que ce domaine qui était une curiosité devenait une préoccupation grandissante.<br />
          <br />J'ai entrepris une reconversion afin de faire valider et d'approfondir mes compétences avec un premier diplôme en développement front-end.  <br />
          <br />Curieux et passionné, mon objectif est de m'améliorer et d'apprendre davantage dans un domaine qui est en perpétuelle évolution chaque jour.
        </p>
      </div>
    </section>
  );
}
