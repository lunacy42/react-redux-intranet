import { useAppSelector } from '../../../app/hooks';
import { selectCurrentUser } from '../usersSlice';
import UserData from './UserData';
import MyPageForm from './MyPageForm';

const MyPage = () => {
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return null;
  }

  return (
    <div>
      <UserData username={user.username} myPage={true} />
      <MyPageForm />
    </div>
  );
};

export default MyPage;
