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

const UsersList = () => {
  const usersStatus = useSelector(selectUsersStatus);
  const filteredUsers = useSelector(selectFilteredUsers);

  return (
    <div className={styles.grid}>
      {usersStatus === 'succeeded' && filteredUsers?.length === 0 && <p>No Staff found.</p>}
      {filteredUsers?.map((user: User) => {
        const staffInfos = [
          { icon: <MdOutlineLocationOn />, info: user.location },
          { icon: <MdMyLocation />, info: user.department },
          { icon: <AiOutlineTeam />, info: user.team },
          { icon: <HiOutlineMail />, info: user.email },
          { icon: <AiFillPhone />, info: user.telephone },
          { icon: <RiDoorOpenFill />, info: user.room }
        ];
        return (
          <div key={user.id} className={styles.card} data-testid="users-card">
            <img src={user.img} alt={user.firstName} className={styles.img} />
            <Link className={styles.link} to={`/staff/${user.username}`}></Link>
            <div className={styles.staffInfo}>
              <p className={styles.staffName}>
                {user.firstName} {user.lastName}
              </p>
              <p className={styles.staffJobTitle}>{user.jobTitle}</p>
              <div className={styles.staffInfoBlock}>
                {staffInfos.map((staffInfo) => (
                  <div key={staffInfo.info} className={styles.staffInfoField}>
                    <div className={styles.icon}>{staffInfo.icon}</div>
                    <p>{staffInfo.info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
