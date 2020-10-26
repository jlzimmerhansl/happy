import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: ${(props) => props.theme.colors.background};
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 40px;
      height: 40px;
      background: ${(props) => props.theme.colors.primary};
      box-shadow: 17.2868px 27.6589px 41.4882px rgba(23, 242, 166, 0.16);
      border-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.backgroundEffectTop} 0%,
    ${(props) => props.theme.colors.backgroundEffectBotton} 100%
  );
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  strong {
    font-weight: 800;
  }
`;

export const LinkButton = styled(Link)`
  position: absolute;

  z-index: 10;

  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => lighten(0.09, props.theme.colors.primary)};
  }
`;
