import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Design1 from './pages/Design1';
import Design2 from './pages/Design2';
import Design3 from './pages/Design3';
import Design4 from './pages/Design4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design1" element={<Design1 />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
        <Route path="/design4" element={<Design4 />} />
      </Routes>
    </Router>
  );
}

export default App;
