import React from 'react';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, highlight }) => {
  return (
    <h2 className={styles.title}>
      {children}
      {highlight && <span className={styles.highlight}> {highlight}</span>}
    </h2>
  );
};

export default SectionTitle;