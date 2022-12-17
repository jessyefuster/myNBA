import { Route, Routes } from 'react-router-dom';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import Header from 'components/layout/Header';
import Home from 'pages/Home';
import Teams from 'pages/Teams';
import NotFound from 'pages/NotFound';

const theme = extendTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: 'Raleway',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontWeight: 500,
    },
    overline: {
      fontFamily: 'Raleway',
    },
  },
  shape: {
    borderRadius: 10,
  }
});

const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/teams" element={<Teams />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CssVarsProvider>
  );
}

export default App;
