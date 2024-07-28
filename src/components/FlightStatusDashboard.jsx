import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FlightStatusDashboard.css';

const FlightStatusDashboard = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/flights')
            .then(response => {
                setFlights(response.data);
            })
            .catch(error => {
                console.error('Error fetching flights:', error);
            });
    }, []);

    return (
        <div className="dashboard">
            <h1>Flight Status Dashboard</h1>
            <table className="flights-table">
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Status</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Gate</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map(flight => (
                        <tr key={flight._id}>
                            <td>{flight.flightNumber}</td>
                            <td>{flight.status}</td>
                            <td>{new Date(flight.departureTime).toLocaleString()}</td>
                            <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
                            <td>{flight.gate}</td>
                            <td>{flight.from.name} ({flight.from.iata})</td>
                            <td>{flight.to.name} ({flight.to.iata})</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlightStatusDashboard;
