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
            <h2>Administration</h2>
            <div className={styles.adminNav}>
              <Link to={`/administrate-announcements`}>Announcements</Link>
              <Link to={`/administrate-users`}>Users</Link>
              <Link to={`/administrate-events`}>Events</Link>
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
