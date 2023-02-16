import { User } from '../../../common/types';
import styles from './UserCard.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { RiDoorOpenFill } from 'react-icons/ri';
import Card from '../../../components/card/Card';

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
    <Card cardRef={cardRef} image={user.img} alt={user.firstName} link={`/staff/${user.username}`}>
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
    </Card>
  );
};

export default UserCard;
