import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User } from '../../common/types';
import { selectUsersStatus, selectFilteredUsers, selectNewUsers } from './usersSlice';
import styles from './NewStaffList.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';
import UserCard from './UserCard';

const NewStaffList = () => {
  const usersStatus = useSelector(selectUsersStatus);
  const newUsers = useSelector(selectNewUsers);

  return (
    <div className={styles.grid}>
      {usersStatus === 'succeeded' && newUsers?.length === 0 && <p>No Staff found.</p>}
      {newUsers?.map((user: User) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default NewStaffList;
