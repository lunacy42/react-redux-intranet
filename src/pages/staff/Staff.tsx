import FilterFields from '../../features/filters/FilterFields';
import UsersList from '../../features/users/components/UsersList';
import styles from './Staff.module.scss';

const Staff = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h2>Staff</h2>
        </div>
        <FilterFields />
      </div>
      <UsersList />
    </div>
  );
};

export default Staff;
