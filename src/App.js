import "./App.css";
import travel_02 from "./images/courier-1.jpeg";
import travel_03 from "./images/courier-1.jpeg";
import React, {useState}from 'react';
import About from './components/AboutSection';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';
import Slider from "./components/Slider";



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
    <Slider
        imageSrc={travel_02}
        title={"Shipping Experience."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"What are our advantages."}
        subtitle={"Good consumer service with the fastest delivery Network."}
        flipped={true}
      />

   </>
  );
}

export default App;
