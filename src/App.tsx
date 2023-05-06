import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { AuthProvider } from './components/Context/AuthContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App