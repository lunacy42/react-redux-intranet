import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';
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
