import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />
        </Routes>
    </Router>
  );
}

export default App;
