import { useParams } from 'react-router-dom';
import UserData from '../../components/UserData';

const SingleStaff = () => {
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

export default SingleStaff;
