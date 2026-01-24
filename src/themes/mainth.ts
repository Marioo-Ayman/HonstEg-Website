import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00BCD4', // Your Teal Accent
      contrastText: '#fff',
    },
    secondary: {
      main: '#0A1A3C', // Your Navy Navbar
    },
    background: {
      default: '#F9F9F9',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});