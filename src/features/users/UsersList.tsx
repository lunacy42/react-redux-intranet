import { useSelector } from 'react-redux';
import { User } from '../../common/types';
import { selectUsersStatus, selectFilteredUsers } from './usersSlice';
import styles from './UsersList.module.scss';
import UserCard from './UserCard';

const UsersList = () => {
  const usersStatus = useSelector(selectUsersStatus);
  const filteredUsers = useSelector(selectFilteredUsers);

  return (
    <div className={styles.grid}>
      {usersStatus === 'succeeded' && filteredUsers?.length === 0 && <p>No Staff found.</p>}
      {filteredUsers?.map((user: User) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
