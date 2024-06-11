import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Upload from './components/upload.js';
import Form from './components/form.js';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import About from './pages/about.js'; // Import the About page component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
