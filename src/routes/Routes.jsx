import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

import BirthdayCard from '../mini-projects/birthday-reminder/BirthdayCard'

import Quiz from '../mini-projects/quiz-project/Quiz';
import ProductsPage from '../mini-projects/filterable-products/ProudctsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/birth-reminder" element={<BirthdayCard/>} />
        <Route path="/filterable-products" element={<ProductsPage/>} />
        
        <Route path="/" element={<HomePage />} />
      
        {/* Add routes for other projects here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
