import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import { Container, Wrapper, Location } from './styles';
import SwitchButton from '../../components/SwitchButton';

interface Props {
  toggleTheme(): void;
}

const Landing: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Wrapper>
        <SwitchButton toggleTheme={toggleTheme} />

        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </Location>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Landing;
