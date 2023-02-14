import { useSelector } from 'react-redux';
import { User } from '../../common/types';
import { selectUsersStatus, selectNewUsers } from './usersSlice';
import styles from './NewStaffList.module.scss';
import UserCard from './UserCard';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useEffect, useRef } from 'react';
import HorizontalScrollBox from '../../components/HorizontalScrollBox/HorizontalScrollBox';

const NewStaffList = () => {
  const usersStatus = useSelector(selectUsersStatus);
  const newUsers = useSelector(selectNewUsers);
  const scrollContainerRef = useRef<null | HTMLDivElement>(null);
  const cardRef = useRef<null | HTMLDivElement>(null);
  const buttonLeftRef = useRef<null | HTMLDivElement>(null);
  const buttonRightRef = useRef<null | HTMLDivElement>(null);

  const scrollForward = () => {
    const scrollWidth = cardRef?.current ? cardRef.current.offsetWidth + 12 : 250;
    const containerWidth = scrollContainerRef?.current
      ? scrollContainerRef.current.offsetWidth + 24
      : 500;
    const totalScrollWidth = scrollContainerRef?.current
      ? scrollContainerRef.current.scrollWidth
      : 250;
    scrollContainerRef &&
      scrollContainerRef.current &&
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollWidth,
        behavior: 'smooth'
      });
    setTimeout(() => {
      const scrollPosition = scrollContainerRef?.current
        ? scrollContainerRef.current.scrollLeft
        : 0;
      console.log('first', scrollPosition >= totalScrollWidth - containerWidth);
      if (scrollPosition >= totalScrollWidth - containerWidth) {
        if (buttonRightRef?.current) {
          console.log('first');
          buttonRightRef.current.style.display = 'none';
        }
      } else {
        if (buttonRightRef?.current) {
          console.log('first');
          buttonRightRef.current.style.display = 'flex';
        }
      }
      if (scrollPosition === 0) {
        if (buttonLeftRef?.current) {
          console.log('first');
          buttonLeftRef.current.style.display = 'none';
        }
      } else {
        if (buttonLeftRef?.current) {
          console.log('first');
          buttonLeftRef.current.style.display = 'flex';
        }
      }
    }, 500);
  };
  const scrollBack = () => {
    const containerWidth = scrollContainerRef?.current
      ? scrollContainerRef.current.offsetWidth + 24
      : 500;
    const totalScrollWidth = scrollContainerRef?.current
      ? scrollContainerRef.current.scrollWidth
      : 250;
    scrollContainerRef &&
      scrollContainerRef.current &&
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: cardRef?.current ? -cardRef.current.offsetWidth + 12 : -250,
        behavior: 'smooth'
      });
    setTimeout(() => {
      const scrollPosition = scrollContainerRef?.current
        ? scrollContainerRef.current.scrollLeft
        : 0;
      console.log('first', scrollPosition >= totalScrollWidth - containerWidth);
      if (scrollPosition >= totalScrollWidth - containerWidth) {
        if (buttonRightRef?.current) {
          console.log('first');
          buttonRightRef.current.style.display = 'none';
        }
      } else {
        if (buttonRightRef?.current) {
          console.log('first');
          buttonRightRef.current.style.display = 'flex';
        }
      }
      if (scrollPosition === 0) {
        if (buttonLeftRef?.current) {
          console.log('first');
          buttonLeftRef.current.style.display = 'none';
        }
      } else {
        if (buttonLeftRef?.current) {
          console.log('first');
          buttonLeftRef.current.style.display = 'flex';
        }
      }
    }, 800);
  };
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
