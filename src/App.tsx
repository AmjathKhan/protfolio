import * as React from 'react';
import './App.scss';
import DefaultLayout from './layouts/DefaultLayout'
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
        <Route path="*" element={<Navigate to ="/home" />}/>


        <Route path="/home" element={Home()} />
          <Route path="/about" element={About()} />
          <Route path="/resume" element={Resume()} />
          <Route path="/contact" element={Contact()} />


        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
