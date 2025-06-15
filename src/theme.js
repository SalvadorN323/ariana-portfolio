import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Hot pink
      light: '#FFB6C1', // Light pink
      dark: '#C71585', // Deep pink
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9C27B0', // Purple
      light: '#E1BEE7', // Light purple
      dark: '#7B1FA2', // Dark purple
      contrastText: '#ffffff',
    },
    background: {
      default: '#FFF5F8', // Very light pink
      paper: '#ffffff',
    },
    text: {
      primary: '#2C3E50', // Dark blue-gray
      secondary: '#6C757D', // Medium gray
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 105, 180, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme; 