import { useSelector } from 'react-redux';
import { selectUserByUsername, updateUser } from '../usersSlice';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app/store';
import UserForm, { FormData } from './userForm/UserForm';
import { useAppDispatch } from '../../../app/hooks';

const EditUser = () => {
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const user = username
    ? useSelector((state: RootState) => selectUserByUsername(state, username))
    : null;

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  const values = {
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    department: user.department,
    team: user.team,
    jobTitle: user.jobTitle,
    img: user.img,
    telephone: user.telephone,
    location: user.location,
    room: user.room,
    role: user.role
  };
  const onSubmit = (data: FormData) => {
    dispatch(
      updateUser({
        ...user,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        department: data.department,
        team: data.team,
        jobTitle: data.jobTitle,
        img: data.img,
        telephone: data.telephone,
        location: data.location,
        room: data.room,
        role: data.role
      })
    );
  };
  return <UserForm values={values} title="Edit User" onSubmit={onSubmit} />;
};

export default EditUser;
