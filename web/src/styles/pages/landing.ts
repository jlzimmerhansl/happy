import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.backgroundEffectTop} 0%,
    ${(props) => props.theme.colors.backgroundEffectBotton} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
