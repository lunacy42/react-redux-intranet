import { useSelector } from 'react-redux';
import { selectUserByUsername } from '../../features/users/usersSlice';
import styles from './index.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';
import { RootState } from '../../app/store';

interface UserDataProps {
  username: string;
  myPage?: boolean;
}

const UserData = ({ username, myPage = false }: UserDataProps) => {
  const user = useSelector((state: RootState) => selectUserByUsername(state, username));

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  const staffInfos = [
    { icon: <MdOutlineLocationOn />, info: user.location },
    { icon: <MdMyLocation />, info: user.department },
    { icon: <AiOutlineTeam />, info: user.team },
    { icon: <HiOutlineMail />, info: user.email },
    { icon: <AiFillPhone />, info: user.telephone },
    { icon: <RiDoorOpenFill />, info: user.room }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.leftBlock}>
        <img src={user.img} alt={user.firstName} className={styles.img} />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p className={styles.jobTitle}>{user.jobTitle}</p>
        {!myPage && (
          <>
            <strong>Availability: </strong>
            <p>{user.availability}</p>
            <strong>Notice: </strong>
            <p>{user.notice}</p>
          </>
        )}
      </div>
      <div>
        <div className={styles.userInfo}>
          {/* on myPage there will be a form for these fields, so don't show them there */}
          {staffInfos.map((staffInfo) => (
            <div key="staffInfo.info" className={styles.userInfoField}>
              <div className={styles.icon}>{staffInfo.icon}</div>
              <p>{staffInfo.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;
