import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';
import ScrollProgress from './components/interactive/ScrollProgress/ScrollProgress';
import BackToTop from './components/interactive/BackToTop/BackToTop';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className={styles.app}>
        <Helmet>
          <title>Kendryd Rodríguez - Portfolio</title>
          <meta name="description" content="Ingeniero en Software especializado en microservicios, APIs REST y sistemas empresariales. Desarrollador backend con experiencia en Python y Java." />
          <meta name="keywords" content="Ingeniero de Software, Desarrollador Backend, Microservicios, Python, Java, React, Spring Boot, Django" />
          <meta name="author" content="Kendryd Rodríguez" />
          <meta property="og:title" content="Kendryd Rodríguez - Portfolio" />
          <meta property="og:description" content="Portfolio profesional de Kendryd Rodríguez, Ingeniero en Software" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://kendrydrodriguez.com" />
        </Helmet>

        <ScrollProgress />
        <BackToTop />
        <Header />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;