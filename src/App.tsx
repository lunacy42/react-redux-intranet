import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './features/layout/Layout';
import Dashboard from './features/dashboard/Dashboard';
import Staff from './features/staff/Staff';
import NoMatch from './features/noMatch/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
