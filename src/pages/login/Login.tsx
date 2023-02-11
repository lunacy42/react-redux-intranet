import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LoginUser } from '../../common/types';
import { login, selectAuth } from '../../features/auth/authSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const userStatus = useAppSelector((state) => state.auth.status);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    isAuthenticated && navigate('/', { replace: true });
  }, [isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(login({ email: data.email, password: data.password }));
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          data-testid="input-email"
          type="email"
          placeholder="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span data-testid="error-email">This field is required</span>}

        <input
          data-testid="input-password"
          type="password"
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span data-testid="error-password">This field is required</span>}

        <input data-testid="login-submit" type="submit" />
      </form>
    </div>
  );
};

export default Login;
