import { Link } from 'react-router-dom';
import { User } from '../../../common/types';
import styles from './UserCard.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';

interface UserCardProps {
  user: User;
  cardRef: { current: null | HTMLDivElement } | null;
}

const UserCard = ({ user, cardRef }: UserCardProps) => {
  const staffInfos = [
    { icon: <MdOutlineLocationOn />, info: user.location },
    { icon: <MdMyLocation />, info: user.department },
    { icon: <AiOutlineTeam />, info: user.team },
    { icon: <HiOutlineMail />, info: user.email },
    { icon: <AiFillPhone />, info: user.telephone },
    { icon: <RiDoorOpenFill />, info: user.room }
  ];
  return (
    <div ref={cardRef} className={styles.card} data-testid="users-card">
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
};

export default UserCard;
