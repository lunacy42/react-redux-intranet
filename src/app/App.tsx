import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import Staff from '../pages/staff/Staff';
import NoMatch from '../pages/noMatch/NoMatch';
import ProtectedRoute from '../common/routes/ProtectedRoute';
import Login from '../pages/login/Login';
import { useAppDispatch, useAppSelector } from './hooks';
import { login } from '../features/auth/authSlice';
import User from '../pages/user/User';
import SingleStaff from '../pages/singleStaff/SingleStaff';
import { fetchUsers, selectCurrentUser, selectUsersStatus } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';
import {
  fetchAnnouncements,
  selectAnnouncementsStatus
} from '../features/announcements/announcementsSlice';
import { fetchEvents, selectEventsStatus } from '../features/events/eventsSlice';
import AnnouncementsAdminPage from '../features/announcements/components/announcementsAdminPage/AnnouncementsAdminPage';
import AdminRoute from '../common/routes/AdminRoute';
import EditAnnouncement from '../features/announcements/components/EditAnnouncement';
import CreateAnnouncement from '../features/announcements/components/CreateAnnouncement';
import EventsAdminPage from '../features/events/components/eventsAdminPage/EventsAdminPage';
import EditEvent from '../features/events/components/EditEvent';
import CreateEvent from '../features/events/components/CreateEvent';
import UsersAdminPage from '../features/users/components/usersAdminPage/UsersAdminPage';
import EditUser from '../features/users/components/EditUser';
import CreateUser from '../features/users/components/CreateUser';

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useSelector(selectCurrentUser);
  const usersStatus = useSelector(selectUsersStatus);
  const announcementsStatus = useSelector(selectAnnouncementsStatus);
  const eventsStatus = useSelector(selectEventsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(login({ email: '', password: '' }));
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
    if (announcementsStatus === 'idle') {
      dispatch(fetchAnnouncements());
    }
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
    console.log('user, isAuthenticated', user, isAuthenticated, user?.role === 'admin');
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
