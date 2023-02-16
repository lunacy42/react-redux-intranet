import AnnouncementForm from './announcementForm/AnnouncementForm';

type FormData = {
  title: string;
  text: string;
};

const CreateAnnouncement = () => {
  const values = {
    title: '',
    text: ''
  };
  const onSubmit = (data: FormData) => console.log(data);
  return <AnnouncementForm values={values} title="Create Announcement" onSubmit={onSubmit} />;
};

export default CreateAnnouncement;
