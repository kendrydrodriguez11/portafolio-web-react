import React from 'react';
import Card from '@/components/ui/Card/Card';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className={styles.about}>
      <div className={styles.container}>
        <SectionTitle highlight="Mí">Sobre</SectionTitle>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <Card>
              <h3 className={styles.cardTitle}>📋 Perfil Profesional</h3>
              <p className={styles.cardText}>
                Ingeniero en Software graduado de la Universidad Estatal de Milagro, con
                experiencia profesional en desarrollo backend con Python (Django) y sólida
                experiencia técnica en Java y Spring Boot mediante proyectos complejos.
                Enfocado en el diseño de arquitecturas de microservicios, integración de
                servicios cloud, sistemas ERP y APIs robustas y escalables.
              </p>
            </Card>

            <Card>
              <h3 className={styles.cardTitle}>💼 Experiencia Profesional</h3>
              <div className={styles.experienceItem}>
                <h4 className={styles.company}>HeyEcuador</h4>
                <p className={styles.duration}>2025 · 9 meses</p>
                <p className={styles.cardText}>
                  Desarrollo backend con Python y Django Rest Framework. Implementación de autenticación
                  biométrica, gestión de citas médicas y APIs para servicios de salud.
                </p>
              </div>
            </Card>
          </div>

          <div className={styles.column}>
            <Card>
              <h3 className={styles.cardTitle}>🎓 Formación</h3>
              <h4 className={styles.degree}>Ingeniería en Software</h4>
              <p className={styles.cardText}>Universidad Estatal de Milagro</p>
              <p className={styles.year}>Graduado en 2025</p>
            </Card>

            <Card>
              <h3 className={styles.cardTitle}>🌐 Idiomas</h3>
              <div className={styles.languages}>
                <div className={styles.languageItem}>
                  <span>Español</span>
                  <span className={styles.level}>Nativo</span>
                </div>
                <div className={styles.languageItem}>
                  <span>Inglés</span>
                  <span className={styles.level}>B1</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className={styles.cardTitle}>📍 Ubicación</h3>
              <div className={styles.location}>
                <span>🏙️</span>
                <span>Guayaquil, Ecuador</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;