import React, { useState } from 'react';
import { axiosInstance, setAuthToken } from '../axiosConfig';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
  //console.log('Dados enviados:', { username, password }); 

    e.preventDefault();
    try {
      const response = await axiosInstance.post('http://localhost:5000/auth/login', {
        username,
        password,
      });
      setAuthToken(response.data.token);
      onLogin(response.data.token); 
      setError('');
    } catch (error) {
      console.error('Erro no login:', error.response || error);
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { username, password });
//       alert('Login bem-sucedido!');
//       // Armazenar o token
//       localStorage.setItem('token', response.data.token);
//     } catch (error) {
//       alert('Erro ao fazer login');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="email"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Senha"
//       />
//       <button onClick={handleLogin}>Entrar</button>
//     </div>
//   );
// };

// export default Login;
