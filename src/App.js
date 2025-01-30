import AOS from "aos";
import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import Aboutpage from "./components/About/Aboutpage";
import Class from "./components/Class/Class";
import Contact from "./components/Contact/Contact";
import Home from './components/Home/Home';
import Navmenu from './components/Navmenu/Navmenu';
import Teacherpage from "./components/Teacherpage/Teacherpage";



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Navmenu/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/teacher' element={<Teacherpage/>}/>
        <Route path='/blog' element={<h1>Blog Page</h1>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Container><h1>404 Not Found</h1></Container>}/>
       </Routes>
      </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App
