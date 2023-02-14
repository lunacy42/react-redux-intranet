import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
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
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
