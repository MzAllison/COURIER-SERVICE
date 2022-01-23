import "./App.css";
import React, {useState}from 'react';
import About from './components/AboutSection';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle} /> 
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero slides={SliderData } />
    <About />

   </>
  );
}

export default App;
