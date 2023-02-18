import { useSelector } from 'react-redux';
import { CompanyEvent } from '../../common/types';
import { useRef } from 'react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox';
import { selectEventsStatus, selectUpcomingEvents } from '../../features/events/eventsSlice';
import EventCard from '../../components/EventCard';

const UpcomingEventsList = () => {
  const eventsStatus = useSelector(selectEventsStatus);
  const upcomingEvents = useSelector(selectUpcomingEvents);
  const cardRef = useRef<null | HTMLDivElement>(null);
  return (
    <HorizontalScrollBox cardRef={cardRef}>
      {eventsStatus === 'succeeded' && upcomingEvents?.length === 0 && <p>No Event found.</p>}
      {upcomingEvents?.map((event: CompanyEvent) => {
        return <EventCard key={event.id} event={event} cardRef={cardRef} />;
      })}
    </HorizontalScrollBox>
  );
};

export default UpcomingEventsList;
