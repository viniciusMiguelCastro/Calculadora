import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Calculator from './components/Calculator';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  //console.log('Token no App:', token);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token); 
    //console.log('Token recebido:', token);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token ? <Calculator /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

