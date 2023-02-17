import { useSelector } from 'react-redux';
import { selectEventById, updateEvent } from '../eventsSlice';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app/store';
import EventForm, { FormData } from './eventForm/EventForm';
import { useAppDispatch } from '../../../app/hooks';

const EditEvent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
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
    image: event.img
  };
  const onSubmit = (data: FormData) => {
    dispatch(updateEvent({ ...event, title: data.title, text: data.text }));
  };
  return <EventForm values={values} title="Edit Event" onSubmit={onSubmit} />;
};

export default EditEvent;
