import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

import BirthdayCard from '../mini-projects/birthday-reminder/BirthdayCard'
import Project2 from '../mini-projects/project2/Project2';
import Quiz from '../mini-projects/quiz-project/Quiz';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/birth-reminder" element={<BirthdayCard/>} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/" element={<HomePage />} />
      
        {/* Add routes for other projects here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
