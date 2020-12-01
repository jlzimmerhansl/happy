import styled from 'styled-components';
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
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1100px;
`;

export const WrapperLogo = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 920px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 260px;
    height: 402px;
    line-height: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    strong {
      display: block;
      margin-top: 100px;
      font-weight: bolder;
      font-size: 24px;
    }
  }
`;

export const WrapperForm = styled.div`
  height: 100vh;
  width: 40%;
  background: ${(props) => props.theme.colors.backgroundForm};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  right: 0;
  width: 520px;
  height: 100vh;
  background: ${(props) => props.theme.colors.backgroundForm};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  legend {
    color: ${(props) => props.theme.colors.legend};
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  label {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    margin-bottom: 8px;
    & + label {
      margin-top: 16px;
    }
  }
  input {
    height: 64px;
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background: ${(props) => props.theme.colors.background};
    padding: 0 16px;
    margin-bottom: 16px;
    &:focus {
      border: 1px solid ${(props) => props.theme.colors.borderButtonActive};
    }
    & + input {
      margin-bottom: 0;
    }
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 24;
  margin: 24px 0 40px;
  div {
    display: flex;
    cursor: pointer;
    input {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      margin-right: 10px;
      appearance: none;
      padding: 0px;
      background: #f5f8fa;
      border: 2px solid ${(props) => props.theme.colors.border};
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease 0s;
      overflow: hidden;
      &:checked {
        background: ${(props) => props.theme.colors.colorButtonActive};
        background: ${(props) => props.theme.colors.borderButtonActive};
      }
      &:after {
        content: '';
        position: absolute;
        width: 4px;
        height: 7px;
        border-width: 0px 2px 2px 0px;
        border-right-style: solid;
        border-bottom-style: solid;
        border-right-color: rgb(255, 255, 255);
        border-bottom-color: rgb(255, 255, 255);
        left: 5px;
        top: 15px;
        transform: rotate(43deg);
        opacity: 0;
        transition: all 0.2s ease-in 0s;
      }
      &:checked::after {
        top: 2px;
        opacity: 1;
      }
    }
  }
  a {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  height: 64px;
  border: 0;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  background: ${(props) => props.theme.colors.fouth};
  cursor: pointer;
  &:disabled {
    background: ${(props) => lighten(0.09, props.theme.colors.fouth)};
    cursor: not-allowed;
  }
`;
