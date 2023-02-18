import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import FormButtons from '../../components/form/FormButtons';
import FormInputText from '../../components/form/FormInputText';
import { login } from '../../features/auth/authSlice';
import styles from './LoginForm.module.scss';

export type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state: RootState) => state.auth.status) === 'loading';
  const values = {
    email: '',
    password: ''
  };
  const methods = useForm<FormData>({ defaultValues: values });
  const { handleSubmit, reset, control } = methods;
  useEffect(() => {
    isAuthenticated && navigate('/', { replace: true });
  }, [isAuthenticated]);

  const onSubmit = (data: any) => {
    dispatch(login({ email: data.email, password: data.password }));
  };
  return (
    <div className={styles.formWrapper}>
      <FormInputText
        name="email"
        control={control}
        label="Email"
        multiline={false}
        required={true}
        dataTestid="input-email"
        type="email"
      />
      <FormInputText
        name="password"
        control={control}
        label="Password"
        multiline={false}
        required={true}
        dataTestid="input-password"
        type="password"
      />
      <FormButtons
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        loading={loading}
        reset={reset}
        submitButtonTitle="Login"
      />
    </div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     data-testid="input-email"
    //     type="email"
    //     placeholder="email"
    //     {...register('email', { required: true })}
    //   />
    //   {errors.email && <span data-testid="error-email">This field is required</span>}

    //   <input
    //     data-testid="input-password"
    //     type="password"
    //     placeholder="password"
    //     {...register('password', { required: true })}
    //   />
    //   {errors.password && <span data-testid="error-password">This field is required</span>}

    //   <input data-testid="login-submit" type="submit" />
    // </form>
  );
};

export default LoginForm;
