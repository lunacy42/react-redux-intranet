import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurrentUser, updateUser } from './usersSlice';
import { User } from '../../common/types';
import UserData from './UserData';

type FormData = {
  availability: string;
  notice: string;
};

const EditUserForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return null;
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      availability: user.availability,
      notice: user.notice
    }
  });

  const onSubmit = (data: FormData) => {
    dispatch(
      updateUser({
        ...user,
        availability: data.availability,
        notice: data.notice,
        noticeDate: new Date().toString()
      })
    );
  };
  return (
    <div>
      <UserData username={user.username} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          data-testid="input-availability"
          placeholder="availability"
          {...register('availability')}
        />

        <textarea data-testid="input-notice" placeholder="notice" {...register('notice')} />

        <input data-testid="login-submit" type="submit" />
      </form>
    </div>
  );
};

export default EditUserForm;
