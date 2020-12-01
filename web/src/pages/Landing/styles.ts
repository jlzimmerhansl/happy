import styled from 'styled-components';
import backgroundImg from '../../images/landing.svg';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.backgroundEffectTop} 0%,
    ${(props) => props.theme.colors.backgroundEffectBotton} 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  padding-top: 10px;

  height: 100%;
  max-height: 600px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${backgroundImg}) no-repeat 80% center;

  main {
    max-width: 350px;
    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  .enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 30px;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors.hoverButton};
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 8rem;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  text-align: right;
  strong {
    font-weight: 800;
  }
`;

export const LinkButton = styled(Link)`
  position: absolute;
  right: 0;
  top: 40px;

  width: 150px;
  height: 64px;
  color: #fff;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => lighten(0.09, props.theme.colors.primary)};
  }
`;
