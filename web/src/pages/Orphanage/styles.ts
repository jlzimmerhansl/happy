import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: ${(props) => props.theme.colors.backgroundForm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;

  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: ${(props) => props.theme.colors.border};
    margin: 64px 0;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;

  button {
    border: 0;
    height: 88px;
    background: none;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    outline: none;

    opacity: 0.6;

    &.active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 88px;
      object-fit: cover;
    }
  }
`;

export const DetailsContent = styled.div`
  padding: 80px;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  p {
    line-height: 28px;
    color: ${(props) => props.theme.colors.text};
    margin-top: 24px;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    color: ${(props) => props.theme.colors.legend};
  }
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;

  footer {
    padding: 20px 0;
    text-align: center;

    a {
      line-height: 24px;
      color: ${(props) => props.theme.colors.primary};
      text-decoration: none;
    }
  }

  .leaflet-container {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }
`;

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;

    svg {
      display: block;
      margin-bottom: 20px;
    }
  }
`;

export const Hours = styled.div`
  background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.legend};
`;

export const OpenOnWeekends = styled.div`
  background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.fouth};
`;

export const CloseOnWeekends = styled.div`
  background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);
  border: 1px solid #ffbcd4;
  color: ${(props) => props.theme.colors.terciary};
`;
