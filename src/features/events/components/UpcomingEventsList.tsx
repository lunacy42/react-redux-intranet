import { useSelector } from 'react-redux';
import { Event, User } from '../../../common/types';
import { selectUsersStatus, selectNewUsers } from '../../users/usersSlice';
import styles from './UpcomingEventsList.module.scss';
import UserCard from '../../users/components/UserCard';
import { useRef } from 'react';
import HorizontalScrollBox from '../../../components/HorizontalScrollBox/HorizontalScrollBox';
import { selectEventsStatus, selectUpcomingEvents } from '../eventsSlice';
import EventCard from './EventCard';

const UpcomingEventsList = () => {
  const eventsStatus = useSelector(selectEventsStatus);
  const upcomingEvents = useSelector(selectUpcomingEvents);
  const cardRef = useRef<null | HTMLDivElement>(null);
  return (
    <HorizontalScrollBox cardRef={cardRef}>
      {eventsStatus === 'succeeded' && upcomingEvents?.length === 0 && <p>No Event found.</p>}
      {upcomingEvents?.map((event: Event) => {
        return <EventCard key={event.id} event={event} cardRef={cardRef} />;
      })}
    </HorizontalScrollBox>
  );
};

export default UpcomingEventsList;
