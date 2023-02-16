import { useSelector } from 'react-redux';
import { selectAnnouncementById } from '../announcementsSlice';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app/store';
import AnnouncementForm from './announcementForm/AnnouncementForm';

type FormData = {
  title: string;
  text: string;
};

const EditAnnouncement = () => {
  const { id } = useParams();
  const announcement = id
    ? useSelector((state: RootState) => selectAnnouncementById(state, id))
    : null;

  console.log('announcement', announcement);
  if (!announcement) {
    return (
      <section>
        <h2>Announcement not found!</h2>
      </section>
    );
  }

  const values = {
    title: announcement.title,
    text: announcement.text
  };
  const onSubmit = (data: FormData) => console.log(data);
  return <AnnouncementForm values={values} title="Edit Announcement" onSubmit={onSubmit} />;
};

export default EditAnnouncement;
