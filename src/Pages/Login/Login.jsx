import React, { useState } from 'react';
import StylLogin, { LoginDiv, LoginH1, LoginInput, LoginImg } from './style';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/meal2.svg';

const Login = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState('');

  props.funcNav(false);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <LoginDiv>
      <StylLogin onSubmit={handleSubmit}>
        <LoginImg src={logo} alt="meal" />
        <LoginH1>
          {'<ED8EN/>'}{' '}
          <span>
            RECIPE
            <span />
          </span>
        </LoginH1>
        <LoginInput
          type="text"
          value={username}
          placeholder="USERNAME"
          required
          onChange={e => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          value={password}
          placeholder="PASSWORD"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <LoginInput className="submit" type="submit" value="LOGIN" />
      </StylLogin>
    </LoginDiv>
  );
};

export default Login;
