import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisualSeparator from './components/VisualSeparator';
import Journey from './components/Journey';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <VisualSeparator />
        <Journey />
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
