import React from 'react';

import { Container, Wrapper, LinkButton } from './styles';

const SuccessPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <main>
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>
          <LinkButton to="/app">Voltar ao mapa</LinkButton>
        </main>
      </Wrapper>
    </Container>
  );
};

export default SuccessPage;
