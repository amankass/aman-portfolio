import { useState } from 'react'
import react from 'react'
import Navbar from './Conponents/Navbar/navbar';
import Intro from './Conponents/Intro/intro';
import Skills from './Conponents/Skills/skills';
import Works from './Conponents/works/works';
function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      </div>
  );
}

export default App
