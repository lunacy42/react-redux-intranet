import { Link } from 'react-router-dom';
import UpcomingEventsList from '../../features/events/components/UpcomingEventsList';
import NewStaffList from '../../features/users/components/NewStaffList';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className={styles.blockRow}>
        <div className={styles.anouncementsBlock}>
          <div className={styles.blockContent}>
            <h3>Announcements</h3>
          </div>
        </div>
        <div className={styles.newStaffBlock}>
          <div className={styles.blockContent}>
            <h3>New Staff Members</h3>
            <NewStaffList />
          </div>
        </div>
        <div className={styles.eventsBlock}>
          <div className={styles.blockContent}>
            <h3>Upcoming Events</h3>
            <UpcomingEventsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
