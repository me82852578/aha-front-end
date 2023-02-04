import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {

  interface Palette {
    gradient: {
      primary:string
    };
  }
  interface TypeBackground {
    primary:CSSProperties['color']
    secondary:CSSProperties['color']
  }

  interface PaletteOptions {
    gradient:{
      primary:string
    }
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      primary: '#181818',
      secondary: '#1B1B1B',
    },
    gradient: {
      primary: 'linear-gradient(90deg, #FF5C01, #FFD25F )',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif;",
  },
});

export default theme;
