import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../../features/users/usersSlice';
import styles from './Layout.module.scss';

const Layout = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div>
      <div className={styles.header}>
        <Link className={styles.pageTitle} to="/">
          <h1>Pear Intranet</h1>
        </Link>
        <div className={styles.nav}>
          <Link to={`/`}>Dashboard</Link>
          <Link to={`/staff`}>Staff</Link>
          <Link to={`/edit-user`}>My Page</Link>
        </div>
      </div>
      <hr />
      {currentUser?.role === 'admin' && (
        <>
          <div className={styles.adminNavWrapper}>
            <div className={styles.adminNav}>
              <Link to={`/edit-announcements`}>Edit Announcements</Link>
              <Link to={`/edit-users`}>Edit Users</Link>
              <Link to={`/edit-events`}>Edit Events</Link>
            </div>
          </div>
          <hr />
        </>
      )}
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
