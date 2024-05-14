import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      drawer: {
        width: number;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      drawer?: {
        width?: number;
      };
    };
  }
}
