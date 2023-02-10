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

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    desktop: true; // adds the `mobile` breakpoint
  }

}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          '*::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 7px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
          },
          '*::-webkit-scrollbar': {
            height: '6px',
            width: '7px',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'rgb(182, 182, 182)',
          },
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: '#FFFFFF' },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      desktop: 765,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
