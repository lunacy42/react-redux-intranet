import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { User } from '../../common/types';
import { fetchUsers, selectUsers, selectUsersStatus, selectFilteredUsers } from './usersSlice';
import styles from './UsersList.module.css';

const UsersList = () => {
  const users = useSelector(selectUsers);
  const usersStatus = useSelector(selectUsersStatus);
  const filteredUsers = useSelector(selectFilteredUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [usersStatus, users, dispatch]);

  return (
    <div className={styles.grid}>
      {usersStatus === 'succeeded' && filteredUsers?.length === 0 && <p>No Staff found.</p>}
      {filteredUsers?.map((user: User) => {
        return (
          <div key={user.id} className={styles.card}>
            <img
              width={250}
              height={250}
              src={user.img}
              alt={user.firstName}
              className={styles.img}
            />
            <Link className={styles.link} to={`/staff/${user.firstName}`}></Link>
            <div>
              <p className={styles.staffName}>{user.firstName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
