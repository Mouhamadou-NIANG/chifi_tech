import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './features/HomePage/HomePage';
import SkillsPage from './features/SkillsPage/SkillsPage';
import ExperiencePage from './features/ExperiencePage/ExperiencePage';

const RoutesComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
