import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import Button from '@/components/ui/Button/Button';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.greeting}>¡Hola! Soy</h2>
              <h1 className={styles.name}>
                KENDRYD JONAYKER<br />
                <span className={styles.highlight}>RODRÍGUEZ RONQUILLO</span>
              </h1>
              <p className={styles.title}>Backend Developer especializado en Java & Spring Boot</p>
            </div>
            <p className={styles.description}>
              Backend Developer especializado en Java y Spring Boot, con experiencia en
              arquitecturas de microservicios, APIs REST y sistemas empresariales.
              Experiencia profesional previa en backend con Python (Django).
            </p>
            <div className={styles.buttons}>
              <Button
                variant="primary"
                icon={<Github size={20} />}
                onClick={() => window.open('https://github.com/kendrydrodriguez11', '_blank')}
              >
                GitHub
              </Button>
              <Button
                variant="secondary"
                icon={<Linkedin size={20} />}
                onClick={() => window.open('https://www.linkedin.com/in/kendryd-jonayker-rodriguez-ronquillo-77a1a826b/', '_blank')}
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                icon={<FileText size={20} />}
                onClick={() => window.open('../../src/cv/CV_KENDRYD_RODRIGUEZ_RONQUILLO.pdf', '_blank')}
              >
                Descargar CV
              </Button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="../../src/cv/profile_photo.png"
                alt="Kendryd Rodriguez"
                className={styles.image}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="' + styles.placeholder + '">KR</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;