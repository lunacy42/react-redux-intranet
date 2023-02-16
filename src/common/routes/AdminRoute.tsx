import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAdmin?: boolean;
  children?: any;
}

const AdminRoute = ({ isAdmin = false, children }: ProtectedRouteProps) => {
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default AdminRoute;
