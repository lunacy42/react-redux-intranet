import { useSelector } from 'react-redux';
import {
  selectAnnouncementById,
  selectAnnouncementsUpateStatus,
  updateAnnouncement
} from '../announcementsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../app/store';
import AnnouncementForm from './announcementForm/AnnouncementForm';
import { useAppDispatch } from '../../../app/hooks';

type FormData = {
  title: string;
  text: string;
};

const EditAnnouncement = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectAnnouncementsUpateStatus) === 'loading';
  const announcement = id
    ? useSelector((state: RootState) => selectAnnouncementById(state, id))
    : null;

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
  const onSubmit = (data: FormData) => {
    dispatch(updateAnnouncement({ ...announcement, title: data.title, text: data.text })).then(
      () => {
        navigate(-1);
      }
    );
  };
  return (
    <AnnouncementForm
      values={values}
      title="Edit Announcement"
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default EditAnnouncement;
