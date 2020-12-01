import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

import logo from '../../images/logo-vertical.svg';

import {
  Container,
  LogoContainer,
  FormContainer,
  Form,
  ButtonContainer,
  WrapperForm,
  WrapperLogo,
  Button,
} from './styles';

const SignIn: React.FC = () => {
  const { signIn, signed } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(event: FormEvent) {
    event.preventDefault();
    signIn({ email, password });
  }
  return (
    <Container>
      <WrapperLogo>
        <LogoContainer>
          <div>
            <img src={logo} alt="Happy" />
            <strong>São Paulo</strong>
            <span>São Paulo</span>
          </div>
        </LogoContainer>
      </WrapperLogo>
      <WrapperForm>
        <FormContainer>
          <Form onSubmit={handleSignIn}>
            <legend>Fazer Login</legend>

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <div>
                <input id="box" type="checkbox" />
                <label htmlFor="box">Lembrar-me</label>
                <span />
              </div>
              <Link to="remember">Esqueci minha senha</Link>
            </ButtonContainer>
            <Button type="submit">Entrar</Button>
          </Form>
        </FormContainer>
      </WrapperForm>
    </Container>
  );
};

export default SignIn;
