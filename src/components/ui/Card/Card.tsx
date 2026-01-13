import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hoverable = true }) => {
  return (
    <div className={classNames(styles.card, className, { [styles.hoverable]: hoverable })}>
      {children}
    </div>
  );
};

export default Card;