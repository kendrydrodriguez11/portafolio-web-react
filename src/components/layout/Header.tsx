import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo} onClick={() => scrollToSection('inicio')}>
            KR
          </div>

          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <div
                key={item.id}
                className={styles.navLink}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </div>
            ))}
          </nav>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={styles.mobileNavLink}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;