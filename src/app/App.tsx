import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import Dashboard from '../pages/Dashboard';
import Staff from '../pages/Staff';
import NoMatch from '../pages/NoMatch';
import ProtectedRoute from '../common/routes/ProtectedRoute';
import Login from '../pages/Login';
import { useAppDispatch, useAppSelector } from './hooks';
import { login } from '../features/auth/authSlice';
import User from '../pages/MyPage';
import SingleStaff from '../pages/SingleStaff';
import { fetchUsers, selectCurrentUser, selectUsersStatus } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';
import {
  fetchAnnouncements,
  selectAnnouncementsStatus
} from '../features/announcements/announcementsSlice';
import { fetchEvents, selectEventsStatus } from '../features/events/eventsSlice';
import AnnouncementsAdminPage from '../pages/adminPages/announcements/AnnouncementsAdminPage';
import AdminRoute from '../common/routes/AdminRoute';
import EditAnnouncement from '../pages/adminPages/announcements/EditAnnouncement';
import CreateAnnouncement from '../pages/adminPages/announcements/CreateAnnouncement';
import EventsAdminPage from '../pages/adminPages/events/eventsAdminPage';
import EditEvent from '../pages/adminPages/events/EditEvent';
import CreateEvent from '../pages/adminPages/events/CreateEvent';
import UsersAdminPage from '../pages/adminPages/users/usersAdminPage';
import EditUser from '../pages/adminPages/users/EditUser';
import CreateUser from '../pages/adminPages/users/CreateUser';

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useSelector(selectCurrentUser);
  const usersStatus = useSelector(selectUsersStatus);
  const announcementsStatus = useSelector(selectAnnouncementsStatus);
  const eventsStatus = useSelector(selectEventsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(login({ email: '', password: '' }));
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
    if (announcementsStatus === 'idle') {
      dispatch(fetchAnnouncements());
    }
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
  }, [usersStatus]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute redirectPath="/login" isAuthenticated={isAuthenticated} />}>
          <Route index element={<Dashboard />} />
          <Route path="/edit-user" element={<User />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/:username" element={<SingleStaff />} />
        </Route>
        <Route element={<AdminRoute isAdmin={user?.role === 'admin'} />}>
          <Route path="/administrate-announcements" element={<AnnouncementsAdminPage />} />
          <Route path="/announcements/edit/:id" element={<EditAnnouncement />} />
          <Route path="/announcements/create" element={<CreateAnnouncement />} />
          <Route path="/administrate-events" element={<EventsAdminPage />} />
          <Route path="/events/edit/:id" element={<EditEvent />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/administrate-users" element={<UsersAdminPage />} />
          <Route path="/users/edit/:username" element={<EditUser />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/edit-users" element={<User />} />
          <Route path="/edit-events" element={<Staff />} />
          <Route path="/staff/:username" element={<SingleStaff />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
