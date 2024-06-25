import React from 'react';
import './Home.scss';
import NavBar from '../Components/NavBar/NavBar';
import Welcome from '../Components/Welcome/Welcome';
import Skills from '../Containers/Skills/Skills';
import Projects from '../Containers/Projects/Projects';
import Contact from '../Containers/Contact/Contact';
import Footer from '../Containers/Footer/Footer';

export default function Home() {

  return (
    <>
      <main id="home" className="main">
        <NavBar active="home" />
          <div className="contentWrapper">
          <Welcome />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};
