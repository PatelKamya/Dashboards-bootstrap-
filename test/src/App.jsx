import { useState } from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
// import ProtectedRoutes from './proectedrouets/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoutes>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
