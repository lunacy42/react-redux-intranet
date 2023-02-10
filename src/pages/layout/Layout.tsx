import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Intranet</h1>

      <Link to={`/`}>Dashboard</Link>
      <Link to={`/staff`}>Staff</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
