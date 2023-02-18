import FilterFields from './FilterFields';
import UsersList from './UsersList';
import styles from './index.module.scss';

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
