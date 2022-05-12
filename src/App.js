import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import Services from './components/Services/Services';
import Header from "./components/shared/Header/Header"

const App = () => {


  return (
    <>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/services" element={<Services />} />
     </Routes>
    </>
  );
};

export default App;