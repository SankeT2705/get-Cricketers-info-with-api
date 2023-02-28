import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar';
import './style.css';
import HomeSection from './component/homeSection';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Navbar />
    <HomeSection />
  </React.StrictMode>
);


