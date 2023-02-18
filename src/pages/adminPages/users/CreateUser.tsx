import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { createUser, selectUsersCreateStatus } from '../../../features/users/usersSlice';
import UserForm, { FormData } from './userForm/UserForm';

const CreateUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectUsersCreateStatus) === 'loading';
  const values = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    department: '',
    team: '',
    jobTitle: '',
    img: '',
    telephone: '',
    location: '',
    room: '',
    role: ''
  };
  const onSubmit = (data: FormData) => {
    dispatch(
      createUser({
        id: '',
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
        role: data.role,
        availability: '',
        notice: '',
        noticeDate: '',
        created: new Date().toString()
      })
    ).then(() => {
      navigate(-1);
    });
  };
  return <UserForm values={values} title="Create User" onSubmit={onSubmit} loading={loading} />;
};

export default CreateUser;
