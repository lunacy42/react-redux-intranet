import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User } from '../../common/types';
import { selectUsersStatus, selectFilteredUsers } from './usersSlice';
import styles from './UsersList.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';
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
