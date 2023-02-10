import { Navigate } from 'react-router-dom';

interface RedirectRouteProps {
  user: object | null;
  children?: any;
}

const RedirectRoute = ({ user, children }: RedirectRouteProps) => {
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectRoute;
