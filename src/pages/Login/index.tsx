import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>For admin rights use email admin@test.de and any password.</p>
      <p>For user rights use any email and any password.</p>
      <LoginForm />
    </div>
  );
};

export default Login;
