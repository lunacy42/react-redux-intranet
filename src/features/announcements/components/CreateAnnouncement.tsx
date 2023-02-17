import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { createAnnouncement, selectAnnouncementsCreateStatus } from '../announcementsSlice';
import AnnouncementForm from './announcementForm/AnnouncementForm';

type FormData = {
  title: string;
  text: string;
};

const CreateAnnouncement = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useSelector(selectAnnouncementsCreateStatus) === 'loading';
  const values = {
    title: '',
    text: ''
  };
  const onSubmit = (data: FormData) => {
    dispatch(
      createAnnouncement({
        id: '',
        title: data.title,
        text: data.text,
        created: new Date().toString()
      })
    ).then(() => {
      navigate(-1);
    });
  };
  return (
    <AnnouncementForm
      values={values}
      title="Create Announcement"
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default CreateAnnouncement;
