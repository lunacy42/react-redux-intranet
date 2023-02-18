import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ReactNode } from 'react';

interface UserCardProps {
  cardRef: { current: null | HTMLDivElement } | null;
  image: string;
  alt: string;
  children: ReactNode;
  link?: string | null;
}

const Card = ({ cardRef, image, alt, link, children }: UserCardProps) => {
  return (
    <div ref={cardRef} className={styles.card} data-testid="card">
      <img src={image} alt={alt} className={styles.img} />
      {link && <Link className={styles.link} to={link}></Link>}
      <div className={styles.infoBox}>{children}</div>
    </div>
  );
};

export default Card;
