import React from 'react';
import './App.css';

// Import layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
