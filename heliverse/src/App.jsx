// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Feature from './components/feature/Feature'
import TrustedBy from './components/trustedby/TrustedBy';
import Purchase from './components/purchase/Purchase';
import ApplyCard from './components/applycard/ApplyCard';
import BrowserSupport from './components/browsersupport/BrowserSupport';
import FeatureCards from './components/featurecard/FeatureCards';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Feature/>
      <TrustedBy/>
      <Purchase/>
      <ApplyCard/>
      <BrowserSupport/>
      <FeatureCards/>
      <Footer/>
    </div>
  );
}

export default App;

