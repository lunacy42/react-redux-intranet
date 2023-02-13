import { useParams } from 'react-router-dom';
import FilterFields from '../../features/filters/FilterFields';
import UserData from '../../features/users/UserData';
import UsersList from '../../features/users/UsersList';
import styles from './User.module.scss';

const User = () => {
  const { username } = useParams();

  if (!username) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <UserData username={username} />
    </div>
  );
};

export default User;
