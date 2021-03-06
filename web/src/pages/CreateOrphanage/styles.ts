import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;
  background: ${(props) => props.theme.colors.backgroundForm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  padding: 64px 80px;
  overflow: hidden;
  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 20px;
  }
  fieldset {
    border: 0;
    legend {
      width: 100%;
      font-size: 32px;
      line-height: 34px;
      color: ${(props) => props.theme.colors.legend};
      font-weight: 700;
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }
  fieldset + fieldset {
    margin-top: 80px;
  }
`;

export const InputBlock = styled.div`
  & + div {
    margin-top: 24px;
  }
  label {
    display: flex;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 8px;
    line-height: 24px;
    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }
  input,
  textarea {
    width: 100%;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 20px;
    outline: none;
    color: ${(props) => props.theme.colors.text};
  }
  input {
    height: 64px;
    padding: 0 16px;
  }
  input[type='file'] {
    display: none;
  }
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 96px;
  background: ${(props) => props.theme.colors.background};
  border: 1px dashed ${(props) => props.theme.colors.hoverButton};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    height: 64px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
    &.active {
      background: ${(props) => props.theme.colors.backgroundButtonActive};
      border: 1px solid ${(props) => props.theme.colors.borderButtonActive};
      color: ${(props) => props.theme.colors.colorButtonActive};
    }
    &:first-child {
      border-radius: 20px 0px 0px 20px;
    }
    &:last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }
  }
`;

export const ButtonConfirm = styled.button`
  margin-top: 64px;
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: ${(props) => props.theme.colors.colorButtonActive};
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  svg {
    margin-right: 16px;
  }
  &:hover {
    background: ${(props) => props.theme.colors.confirmButton};
  }
`;
