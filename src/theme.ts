import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
  custom: {
    drawer: {
      width: 240,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  color: colors,
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontSize: 16,
  },
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary[9],
      light: '#e9ebee',
      dark: colors.primary[3],
      contrastText: '#000',
    },
    secondary: {
      main: colors.secondary[5],
      light: colors.secondary[8],
      dark: colors.secondary[4],
    },
    warning: {
      main: '#Fe9c03',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiInput-root': { background: ' #110C20 !important' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 12,
          padding: '10px 20px',
          textTransform: 'capitalize',
        },
        sizeSmall: {
          padding: '6px 16px',
        },
        outlined: {
          borderWidth: 2,
          '&:hover, &:focus': {
            borderWidth: 2,
            background: '#f9f9f911',
          },
        },

        outlinedSecondary: {
          border: `1px solid ${colors.gray[11]}`,
          color: colors.primary[4],

          '&:hover, &:focus': {
            borderWidth: 1,
            border: `1px solid ${colors.gray[11]}`,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.gray[4]}`,
          borderRadius: '12px !important',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'title' },
          style: {
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '116%',
          },
        },
        {
          props: { variant: 'title2' },
          style: {
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '116%',
          },
        },
        {
          props: { variant: 'headline' },
          style: {
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '117%',
            letterSpacing: '0.01em',
            color: colors.gray[8],
          },
        },
        {
          props: { variant: 'subHeadline' },
          style: {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '135%',
            letterSpacing: '0.01em',
          },
        },
        {
          props: { variant: 'body' },
          style: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '147%',
            color: colors.gray[9],
          },
        },
        {
          props: { variant: 'caption' },
          style: {
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '130%',
          },
        },
      ],
    },
  },
});

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    title2: true;
    headline: true;
    subHeadline: true;
    body: true;
    caption: true;
  }
}

declare module '@mui/material/styles/createPalette' {}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    gray: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    color: {
      gray: object;
      primary: object;
      secondary: object;
    };
    gradients: object;
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    color: {
      gray: object;
      primary: object;
      secondary: object;
    };
  }
}
