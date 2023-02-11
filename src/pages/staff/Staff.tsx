import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { User } from '../../common/types';
import { fetchUsers, selectUsers, selectUsersStatus } from '../../features/users/usersSlice';
import styles from './Staff.module.css';

const Staff = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<User[] | [] | null>(null);
  const users = useSelector(selectUsers);
  const usersStatus = useSelector(selectUsersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('usersStatus', usersStatus, users);
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
    if (usersStatus === 'succeeded') {
      setSelectedUsers(users);
    }
  }, [usersStatus, users, dispatch]);

  useEffect(() => {
    if (usersStatus === 'succeeded') {
      if (selectedUsers) {
        setSelectedUsers(users.filter((user) => user.department === selectedDepartment));
      } else {
        setSelectedUsers(users);
      }
    }
  }, [usersStatus, selectedDepartment]);
  return (
    <div>
      <h1>Staff</h1>
      <div className={styles.grid}>
        {selectedUsers?.map((user: User) => {
          return (
            <div key={user.id} className={styles.card}>
              <img src={user.img} alt={user.firstName} className={styles.img} />
              <Link className={styles.link} to={`/staff/${user.id}`}></Link>
              <div>
                <p className={styles.staffName}>{user.firstName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
