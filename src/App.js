import React, { useState } from 'react';
import FlightStatusDashboard from './components/FlightStatusDashboard';
import FlightDetail from './components/FlightDetail';
import NotificationsSettings from './components/NotificationsSettings';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotificationSubscription from './components/NotificationSubscription';
import LoginForm from './components/LoginSignup/LoginForm';
import SignFrom from './components/LoginSignup/SignForm';

const App = () => {
    const [user, setUser] = useState(null);
    const userId = '66a4a3cb7c689820f7b7ce19';
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Login setUser={setUser} />} />
                    <Route path="/flight/:flightId" element={<FlightDetail />} />
                    <Route path="/settings" element={user ? <NotificationsSettings userId={user} /> : <Login setUser={setUser} />} />
                    <Route path="/dashboard"element={<FlightStatusDashboard />}  />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignFrom />} />
                    <Route path="/subscription" element={<NotificationSubscription userId={userId} />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                  
                </Routes>
            </div>
        </Router>
    );
};

export default App;
