import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { deleteAlert, selectAlerts } from '../../features/alerts/alertsSlice';
import { selectCurrentUser } from '../../features/users/usersSlice';
import styles from './Layout.module.scss';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const alerts = useSelector(selectAlerts);
  const alert = alerts[0];

  useEffect(() => {
    // open alert snack when there is at least one message
    if (alerts.length >= 1) {
      setOpen(true);
    }
    // close and delete first message, if there is more than one message
    if (alerts.length > 1) {
      setOpen(false);
      dispatch(deleteAlert());
    }
  }, [alerts]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(deleteAlert());
    setOpen(false);
  };

  return (
    <div>
      {alerts.length > 0 && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={alert.type === 'success' ? 'success' : 'error'}
            sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      )}
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
