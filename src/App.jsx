import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/Home';

export default function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    
  );
}
