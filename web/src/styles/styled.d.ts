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
    };
  }
}
