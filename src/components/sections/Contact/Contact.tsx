import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import Card from '@/components/ui/Card/Card';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const openGmail = () => {
    const toEmail = "kendrydrodriguez6@gmail.com";
    const subject = "Contacto desde Portfolio Web";
    const body = "Hola Kendryd,\n\nVi tu portfolio web y me gustaría contactarte.\n\nSaludos cordiales,\n[Tu Nombre]";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactItems = [
    {
      id: 1,
      icon: <Mail size={24} />,
      label: 'Correo Electrónico',
      value: 'kendrydrodriguez6@gmail.com',
      action: openGmail
    },
    {
      id: 2,
      icon: <Phone size={24} />,
      label: 'Teléfono',
      value: '+593 99 699 8459',
      action: () => window.open('tel:+593996998459')
    },
    {
      id: 3,
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'kendrydrodriguez11',
      action: () => window.open('https://github.com/kendrydrodriguez11', '_blank')
    },
    {
      id: 4,
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Kendryd Rodríguez',
      action: () => window.open('https://www.linkedin.com/in/kendryd-jonayker-rodriguez-ronquillo-77a1a826b/', '_blank')
    }
  ];

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle highlight="Contacto">Contacto</SectionTitle>
        
        <Card>
          <div className={styles.grid}>
            {contactItems.map((item) => (
              <button
                key={item.id}
                className={styles.contactItem}
                onClick={item.action}
              >
                <span className={styles.icon}>{item.icon}</span>
                <div className={styles.content}>
                  <p className={styles.label}>{item.label}</p>
                  <p className={styles.value}>{item.value}</p>
                </div>
              </button>
            ))}
          </div>

          <div className={styles.location}>
            <button className={styles.contactItem}>
              <span className={styles.icon}><MapPin size={24} /></span>
              <div className={styles.content}>
                <p className={styles.label}>Ubicación</p>
                <p className={styles.value}>Guayaquil, Ecuador</p>
              </div>
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;