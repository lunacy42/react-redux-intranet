import EventForm, { FormData } from './eventForm/EventForm';

const CreateEvent = () => {
  const values = {
    title: '',
    text: '',
    date: '',
    image: ''
  };
  const onSubmit = (data: FormData) => console.log(data);
  return <EventForm values={values} title="Create Event" onSubmit={onSubmit} />;
};

export default CreateEvent;
