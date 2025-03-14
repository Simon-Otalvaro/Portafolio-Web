import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from './Components/Container/Container'
import { Header } from './Components/Layouts/Header/Header'
import { Footer } from './Components/Layouts/Footer/Footer'
import { Experience } from './Components/Pages/Experience/Experience'
import { Home } from './Components/Pages/Home/Home'
import { NotFound } from './Components/Pages/NotFound/NotFound'
import { Profile } from './Components/Pages/Profile/Profile'
import { Studies } from './Components/Pages/Studies/Studies'


export const App = () => {
  return (
  <><Header /> 
     <Container>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/studies' element={<Studies/>}/>
        </Routes>
     </Container>
  <Footer/>   
  </>
  )
}


