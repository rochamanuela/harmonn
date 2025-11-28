import BigLogo from '../assets/logotype-big.svg'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/Auth';

import Input from '../Components/Input/Input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="form-login-page">
      <div>
        <h1>LOGO</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p>Bem vindo(a) de volta! Faça login para continuar</p>

          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required="required"
          />

          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required="required"
          />

          {error && (
            <p className="">{error}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
