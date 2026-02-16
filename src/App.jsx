import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VisualSeparator from './components/VisualSeparator';
import Journey from './components/Journey';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import RideoComingSoon from './components/RideoComingSoon';
import PrayOrDieComingSoon from './components/PrayOrDieComingSoon';
import UncommonLMS from './components/UncommonLMS';

function Home() {
  return (
    <main>
      <Hero />
      <VisualSeparator />
      <Journey />
      <Projects />
      <About />
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rideo" element={<RideoComingSoon />} />
        <Route path="/pray-or-die" element={<PrayOrDieComingSoon />} />
        <Route path="/uncommon-lms" element={<UncommonLMS />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
