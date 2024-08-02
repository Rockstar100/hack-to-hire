import React, { useState } from 'react';
import FlightStatusDashboard from './components/FlightStatusDashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginSignup/LoginForm';
import SignFrom from './components/LoginSignup/SignForm';

const App = () => {
    const [user, setUser] = useState(null);
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<LoginForm  setUser={setUser} />} />
                    <Route path="/dashboard"element={<FlightStatusDashboard />}  />
                    <Route path="/signup" element={<SignFrom />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
