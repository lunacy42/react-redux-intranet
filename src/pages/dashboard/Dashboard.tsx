import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAnnouncementsStatus } from '../../features/announcements/announcementsSlice';
import AnnouncementsList from '../../features/announcements/components/AnnouncementsList';
import UpcomingEventsList from '../../features/events/components/UpcomingEventsList';
import { selectEventsStatus } from '../../features/events/eventsSlice';
import NewStaffList from '../../features/users/components/NewStaffList';
import { selectUsersStatus } from '../../features/users/usersSlice';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const usersStatus = useSelector(selectUsersStatus);
  const announcementsStatus = useSelector(selectAnnouncementsStatus);
  const eventsStatus = useSelector(selectEventsStatus);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className={styles.blockRow}>
        <div className={styles.anouncementsBlock}>
          <div className={styles.blockContent}>
            <h3>Announcements</h3>
            {announcementsStatus === 'idle' || announcementsStatus === 'loading' ? (
              <div className={styles.loadingField}>
                <CircularProgress />
              </div>
            ) : (
              <AnnouncementsList />
            )}
          </div>
        </div>
        <div className={styles.newStaffBlock}>
          <div className={styles.blockContent}>
            <h3>New Staff Members</h3>
            {usersStatus === 'idle' || usersStatus === 'loading' ? (
              <div className={styles.loadingField}>
                <CircularProgress />
              </div>
            ) : (
              <NewStaffList />
            )}
          </div>
        </div>
        <div className={styles.eventsBlock}>
          <div className={styles.blockContent}>
            <h3>Upcoming Events</h3>
            {eventsStatus === 'idle' || eventsStatus === 'loading' ? (
              <div className={styles.loadingField}>
                <CircularProgress />
              </div>
            ) : (
              <UpcomingEventsList />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
