import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card/Card';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Tag from '@/components/ui/Tag/Tag';
import Button from '@/components/ui/Button/Button';
import styles from './Projects.module.scss';

const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Inventario',
    description: 'Plataforma empresarial con arquitectura de microservicios para gestión completa de inventario. Implementa AWS S3, WebSockets, Redis y RabbitMQ para operaciones en tiempo real.',
    features: ['Microservicios', 'Notificaciones en tiempo real', 'Autenticación JWT', 'AWS Cloud'],
    technologies: ['Spring Boot', 'React', 'AWS S3', 'Redis', 'RabbitMQ', 'MySQL'],
    githubUrl: 'https://github.com/kendrydrodriguez11/Sistema-de-Gestion-de-Inventario'
  },
  {
    id: 2,
    title: 'Nuvia ERP',
    description: 'Sistema integral de gestión empresarial con control de acceso, asistencia biométrica, tickets y notificaciones en tiempo real para optimizar procesos empresariales.',
    features: ['API REST', 'Roles y permisos', 'Sistema de tickets', 'Autenticación biométrica'],
    technologies: ['Django', 'PostgreSQL', 'Celery', 'WebSockets', 'JWT', 'React'],
    githubUrl: 'https://github.com/kendrydrodriguez11/Nuvia-ERP---Sistema-de-Gesti-n-Empresarial'
  },
  {
    id: 3,
    title: 'Sistema de Gestión de Tickets de Vuelos',
    description: 'Sistema para la gestión de tickets de vuelos con autenticación Auth0, AWS S3 para almacenamiento de imágenes y arquitectura de microservicios escalable.',
    features: ['Reserva de vuelos', 'AWS S3', 'Autenticación Auth0', 'Microservicios', 'Mensajería asíncrona con RabbitMQ'],
    technologies: ['Spring Boot', 'React', 'RabbitMQ', 'AWS S3', 'PostgreSQL', 'Auth0'],
    githubUrl: 'https://github.com/kendrydrodriguez11/Sistema-gestion-tickets-vuelos'
  },
  {
    id: 4,
    title: 'FaceCommerce',
    description: 'Plataforma e-commerce tipo Amazon para compra y venta de productos con gestión de vendedores y sistema de caché para mejorar el rendimiento.',
    features: ['E-commerce', 'Gestión de ventas', 'Sistema de caché', 'Dashboard de vendedores'],
    technologies: ['Django', 'PostgreSQL', 'Tailwind CSS', 'JavaScript', 'Redis'],
    githubUrl: 'https://github.com/kendrydrodriguez11/FaceCommerce'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className={styles.projects}>
      <div className={styles.container}>
        <SectionTitle highlight="Proyectos">Mis</SectionTitle>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} hoverable={true}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.section}>
                <h4 className={styles.subtitle}>🚀 Características destacadas:</h4>
                <div className={styles.tags}>
                  {project.features.map((feature, index) => (
                    <Tag key={index} variant="highlight">{feature}</Tag>
                  ))}
                </div>
              </div>
              
              <div className={styles.section}>
                <h4 className={styles.subtitle}>🛠️ Tecnologías:</h4>
                <div className={styles.tags}>
                  {project.technologies.map((tech, index) => (
                    <Tag key={index} variant="tech">{tech}</Tag>
                  ))}
                </div>
              </div>
              
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Ver en GitHub <ExternalLink size={16} />
              </a>
            </Card>
          ))}
        </div>

        <div className={styles.moreProjects}>
          <Button
            variant="primary"
            onClick={() => window.open('https://github.com/kendrydrodriguez11', '_blank')}
          >
            📂 Ver todos mis proyectos en GitHub 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;