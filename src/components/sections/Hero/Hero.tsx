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
              <p className={styles.title}>Ingeniero en Software</p>
            </div>
            <p className={styles.description}>
              Desarrollador especializado en arquitecturas de microservicios, APIs REST y sistemas empresariales.
              Apasionado por crear soluciones escalables, eficientes y de alto rendimiento usando las mejores
              prácticas de desarrollo.
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
                onClick={() => window.open('./cv/CV_KENDRYD_RODRIGUEZ_RONQUILLO.pdf', '_blank')}
              >
                Descargar CV
              </Button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/perfil.png"
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