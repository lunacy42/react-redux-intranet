import { useSelector } from 'react-redux';
import {
  selectEventById,
  selectEventsUpdateStatus,
  updateEvent
} from '../../../features/events/eventsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../app/store';
import EventForm, { FormData } from './eventForm/EventForm';
import { useAppDispatch } from '../../../app/hooks';

const EditEvent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectEventsUpdateStatus) === 'loading';
  const event = id ? useSelector((state: RootState) => selectEventById(state, id)) : null;

  if (!event) {
    return (
      <section>
        <h2>Event not found!</h2>
      </section>
    );
  }

  const values = {
    title: event.title,
    text: event.text,
    date: event.date,
    img: event.img
  };
  const onSubmit = (data: FormData) => {
    dispatch(updateEvent({ ...event, title: data.title, text: data.text })).then(() => {
      navigate(-1);
    });
  };
  return <EventForm values={values} title="Edit Event" onSubmit={onSubmit} loading={loading} />;
};

export default EditEvent;
