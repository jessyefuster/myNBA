import Header from 'components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
