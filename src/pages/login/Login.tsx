import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input
          type="password"
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
