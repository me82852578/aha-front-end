import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {

  interface Palette {
    gradient: {
      main:string
    };
  }
  interface TypeBackground {
    main:CSSProperties['color']
    light:CSSProperties['color']
    dark:CSSProperties['color']
    contrastText:CSSProperties['color']
  }

  interface PaletteOptions {
    gradient:{
      main:CSSProperties['background']
    }
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      main: '#181818',
      light: '#1B1B1B',
      dark: '#121212',
      contrastText: 'white',
    },
    gradient: {
      main: 'linear-gradient(90deg, #FF5C01, #FFD25F )',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif;",
  },
});

export default theme;
