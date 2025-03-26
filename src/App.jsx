import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './Components/Container/Container';
import { Header } from './Components/Layouts/Header/Header';
import { Footer } from './Components/Layouts/Footer/Footer';
import { Experience } from './Components/Pages/Experience/Experience';
import { Home } from './Components/Pages/Home/Home';
import { Profile } from './Components/Pages/Profile/Profile';
import { Studies } from './Components/Pages/Studies/Studies';
import Lightning from "./Lightning";

export const App = () => {
  return (
    <div className="app-container"> {}
      <Lightning /> 
      <Header />
      
      <div className="content-container">
        <Container>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/studies' element={<Studies />} />
          </Routes>
        </Container>
      </div>
      
      <Footer />
    </div>
  );
};
