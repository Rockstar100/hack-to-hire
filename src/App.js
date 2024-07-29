import React, { useState } from 'react';
import FlightStatusDashboard from './components/FlightStatusDashboard';
import FlightDetail from './components/FlightDetail';
import NotificationsSettings from './components/NotificationsSettings';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotificationSubscription from './components/NotificationSubscription';

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
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/subscription" element={<NotificationSubscription userId={userId} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
