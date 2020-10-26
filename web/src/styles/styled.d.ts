import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      fouth: string;
      background: string;
      backgroundInput: string;
      text: string;
      backgroundEffectTop: string;
      backgroundEffectBotton: string;
      hoverButton: string;
      backgroundForm: string;
      border: string;
      legend: string;
      borderLeaflet: string;
      backgroundButtonActive: string;
      borderButtonActive: string;
      colorButtonActive: string;
      confirmButton: string;
    };
  }
}
