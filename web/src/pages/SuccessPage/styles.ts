import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SuccessImage from '../../images/success-image.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.fouth};

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

  background: url(${SuccessImage}) no-repeat 80% center;

  main {
    max-width: 350px;
  }

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

  a {
    right: 0;
    bottom: 0;
    text-decoration: none;
    width: 100%;
    margin-top: 40px;
    background: ${(props) => props.theme.colors.borderButtonActive};
    border-radius: 20px;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors.confirmButton};
    }
  }
`;

export const LinkButton = styled(Link)`
  padding: 1.5rem;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.confirmButton};

  &:hover {
    background: ${(props) => props.theme.colors.colorButtonActive};
  }
`;

export const ImageContent = styled.div`
  width: 100%;
`;
