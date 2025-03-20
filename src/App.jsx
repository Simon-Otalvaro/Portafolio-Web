import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './Components/Container/Container';
import { Header } from './Components/Layouts/Header/Header';
import { Footer } from './Components/Layouts/Footer/Footer';
import { Experience } from './Components/Pages/Experience/Experience';
import { Home } from './Components/Pages/Home/Home';
import { NotFound } from './Components/Pages/NotFound/NotFound';
import { Profile } from './Components/Pages/Profile/Profile';
import { Studies } from './Components/Pages/Studies/Studies';
import Aurora from './Components/Aurora'; // Importa el componente Aurora

export const App = () => {
  return (
    <>
      <Aurora // Añades el componente Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/studies' element={<Studies />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};


