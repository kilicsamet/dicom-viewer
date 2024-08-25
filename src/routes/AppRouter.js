import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientList from '../pages/PatientList';
import PatientDetail from '../pages/PatientDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PatientList />} />
      <Route path="/patients" element={<PatientList />} />
      <Route path="/patient/:id" element={<PatientDetail />} />
    </Routes>
  );
};

export default AppRouter;
