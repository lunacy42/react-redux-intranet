import { Link } from 'react-router-dom';
import { Event } from '../../../common/types';
import styles from './EventCard.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';

interface EventCardProps {
  event: Event;
  cardRef: { current: null | HTMLDivElement } | null;
}

const EventCard = ({ event, cardRef }: EventCardProps) => {
  return (
    <div ref={cardRef} className={styles.card} data-testid="users-card">
      <img src={event.img} alt={event.title} className={styles.img} />
      <div className={styles.eventInfo}>
        <p className={styles.eventName}>{event.title}</p>
        <p className={styles.eventDate}>{new Date(event.date).toDateString()}</p>
        <p className={styles.eventText}>{event.text}</p>
      </div>
    </div>
  );
};

export default EventCard;
