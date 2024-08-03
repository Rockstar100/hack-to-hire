from flask_pymongo import PyMongo
from utils import get_mock_flights
from flask import Flask

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://parveenjaiswal100:root123@clickmaster.oveswat.mongodb.net/flight_notifications'
mongo = PyMongo(app)
flights_collection = mongo.db.flights

with app.app_context():
    mock_flights = get_mock_flights()
    flights_collection.insert_many(mock_flights)
