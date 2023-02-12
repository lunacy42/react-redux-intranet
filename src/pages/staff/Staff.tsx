import FilterFields from '../../features/filters/FilterFields';
import UsersList from '../../features/users/UsersList';
import styles from './Staff.module.css';

const Staff = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="title">
          <h2>Staff</h2>
        </div>
        <FilterFields />
      </div>
      <UsersList />
    </div>
  );
};

export default Staff;
