import { useSelector } from 'react-redux';
import { User } from '../../../common/types';
import { selectUsersStatus, selectNewUsers } from './../usersSlice';
import styles from './NewStaffList.module.scss';
import UserCard from './UserCard';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useEffect, useRef } from 'react';
import HorizontalScrollBox from '../../../components/HorizontalScrollBox/HorizontalScrollBox';

const NewStaffList = () => {
  const usersStatus = useSelector(selectUsersStatus);
  const newUsers = useSelector(selectNewUsers);
  const cardRef = useRef<null | HTMLDivElement>(null);

  return (
    <HorizontalScrollBox cardRef={cardRef}>
      {usersStatus === 'succeeded' && newUsers?.length === 0 && <p>No Staff found.</p>}
      {newUsers?.map((user: User) => {
        return <UserCard key={user.id} user={user} cardRef={cardRef} />;
      })}
    </HorizontalScrollBox>
  );
};

export default NewStaffList;
