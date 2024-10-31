// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';
import PMU from './pages/pmu';
import Facial from './pages/facial';
import Pedicure from './pages/pedicure';
import Booknow from './pages/Booknow';

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pmu" element={<PMU />} />
        <Route path="/facial" element={<Facial />} />
        <Route path="/pedicure" element={<Pedicure />} />
        <Route path="/booknow" element={<Booknow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
