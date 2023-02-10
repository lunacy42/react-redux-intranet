import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  user: object | null;
  redirectPath: string;
  children?: any;
}

const ProtectedRoute = ({ user, redirectPath = '/login', children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
