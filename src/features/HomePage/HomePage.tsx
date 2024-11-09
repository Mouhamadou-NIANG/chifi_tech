import React from 'react';
import { Header } from '../../components'; 
import SplineBackground from '../../components/splineBack';
import Home_slider from '../../components/home_slider';
import CssBaseline from '@mui/material/CssBaseline';
import HomeTitle from '../../components/homeTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Création d'un thème avec des styles globaux pour retirer les marges et paddings
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

const HomePage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <SplineBackground />
        <Header />
        <HomeTitle/>
        <Home_slider />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
