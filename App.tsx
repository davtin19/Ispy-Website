
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Experience from './components/Experience';
import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Experience />
        <HowItWorks />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
