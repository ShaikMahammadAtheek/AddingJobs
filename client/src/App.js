import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddJob from './components/AddJob';
import JobsList from './components/JobsList';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/add" element={<AddJob />} />
                    <Route path="/jobs" element={<JobsList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

