import { ReactNode } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


export interface ThemeProps {
  children?: ReactNode;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f515e',
      light: '#5b7d8b',
      dark: '#012934',
      contrastText: '#f1f2f6'
    },
    secondary: {
      main: '#45c6c6',
      light: '#7ff9f9',
      dark: '#009595',
      contrastText: '#123d4f'
    }
  }
});

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
};
