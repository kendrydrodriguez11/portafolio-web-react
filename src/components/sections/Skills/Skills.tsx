import React from 'react';
import Card from '@/components/ui/Card/Card';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './Skills.module.scss';

const skills = [
  {
    id: 1,
    title: 'Lenguajes',
    icon: '💻',
    items: ['Java (17-21)', 'Python (3.12.6)', 'SQL', 'JavaScript (ES6+)  - basico ']
  },
  {
    id: 2,
    title: 'Frameworks',
    icon: '🔧',
    items: ['Spring Boot', 'Django 5.0', 'Django Rest Framework', 'React']
  },
  {
    id: 3,
    title: 'Arquitectura',
    icon: '🏗️',
    items: ['Microservicios', 'Arquitectura en capas', 'Event-driven', 'MVC']
  },
  {
    id: 4,
    title: 'Bases de Datos',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'Redis']
  },
  {
    id: 5,
    title: 'Herramientas',
    icon: '⚙️',
    items: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Jira']
  },
  {
    id: 6,
    title: 'Testing',
    icon: '🧪',
    items: ['Mockito', 'JUnit', 'Postman']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        <SectionTitle highlight="Técnicas">Habilidades</SectionTitle>
        
        <div className={styles.grid}>
          {skills.map((skill) => (
            <Card key={skill.id}>
              <div className={styles.header}>
                <span className={styles.icon}>{skill.icon}</span>
                <h3 className={styles.title}>{skill.title}</h3>
              </div>
              <ul className={styles.list}>
                {skill.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;