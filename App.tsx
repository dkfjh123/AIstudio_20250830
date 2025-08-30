import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SuccessStory from './components/SuccessStory';
import Partners from './components/Partners';
import BrandIdeaGenerator from './components/BrandIdeaGenerator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <SuccessStory />
        <Partners />
        <BrandIdeaGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default App;