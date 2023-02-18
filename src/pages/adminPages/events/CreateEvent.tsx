import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { createEvent, selectEventsCreateStatus } from '../../../features/events/eventsSlice';
import EventForm, { FormData } from './eventForm/EventForm';

const CreateEvent = () => {
  const loading = useSelector(selectEventsCreateStatus) === 'loading';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const values = {
    title: '',
    text: '',
    date: '',
    img: ''
  };
  const onSubmit = (data: FormData) => {
    dispatch(
      createEvent({
        id: '',
        title: data.title,
        text: data.text,
        date: data.date,
        img: 'stafff1.jpg',
        created: new Date().toString()
      })
    ).then(() => {
      navigate(-1);
    });
  };
  return <EventForm values={values} title="Create Event" onSubmit={onSubmit} loading={loading} />;
};

export default CreateEvent;
