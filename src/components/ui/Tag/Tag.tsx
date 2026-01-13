import React from 'react';
import classNames from 'classnames';
import styles from './Tag.module.scss';

interface TagProps {
  children: React.ReactNode;
  variant?: 'highlight' | 'tech';
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, variant = 'tech', className }) => {
  return (
    <span className={classNames(styles.tag, styles[variant], className)}>
      {children}
    </span>
  );
};

export default Tag;