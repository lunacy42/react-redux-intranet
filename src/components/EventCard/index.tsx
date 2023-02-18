import { CompanyEvent } from '../../common/types';
import styles from './index.module.scss';
import Card from '../Card';

interface EventCardProps {
  event: CompanyEvent;
  cardRef: { current: null | HTMLDivElement } | null;
}

const EventCard = ({ event, cardRef }: EventCardProps) => {
  return (
    <Card cardRef={cardRef} image={event.img} alt={event.title}>
      <p className={styles.eventName}>{event.title}</p>
      <p className={styles.eventDate}>{new Date(event.date).toDateString()}</p>
      <p className={styles.eventText}>{event.text}</p>
    </Card>
  );
};

export default EventCard;
