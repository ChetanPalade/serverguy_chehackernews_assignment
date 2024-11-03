import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>

          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
