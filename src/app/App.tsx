import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import Staff from '../pages/staff/Staff';
import NoMatch from '../pages/noMatch/NoMatch';
import ProtectedRoute from '../common/routes/ProtectedRoute';
import Login from '../pages/login/Login';
import { useAppDispatch, useAppSelector } from './hooks';
import { login } from '../features/auth/authSlice';

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(login({ email: '', password: '' }));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute redirectPath="/login" isAuthenticated={isAuthenticated} />}>
          <Route index element={<Dashboard />} />
          <Route path="/staff" element={<Staff />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
