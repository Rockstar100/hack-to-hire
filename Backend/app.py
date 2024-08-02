from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from utils import authenticate_user, get_mock_flights
import pika
import json
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/flight_notifications'


CORS(app, resources={
    r"/*": {
        "origins": ["*"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
        "allow_headers": ["Content-Type", "Authorization"]  
    }
})
mongo = PyMongo(app)
flights_collection = mongo.db.flights
users_collection = mongo.db.users
notifications_collection = mongo.db.notifications



@app.route('/api/flights', methods=['GET'])
def get_flights():
    flights = flights_collection.find()
    flight_list = [{
        '_id': str(f['_id']),
        'flightNumber': f.get('flightNumber', 'N/A'),
        'status': f.get('status', 'N/A'),
        'departureTime': f.get('departureTime', 'N/A'),
        'arrivalTime': f.get('arrivalTime', 'N/A'),
        'gate': f.get('gate', 'N/A'),
    } for f in flights]
    return jsonify(flight_list)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    user = users_collection.find_one({'email': data['email']})

    if user:
        return jsonify({'message': 'User already exists'}), 409

    new_user = {
        'username': data['username'],
        'email': data['email'],
        'password': data['password'],
        'notificationPreferences': []
    }

    result = users_collection.insert_one(new_user)
    return jsonify({'message': 'User created successfully', 'userId': str(result.inserted_id)}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = users_collection.find_one({'email': data['email']})

    if user and user['password'] == data['password']:
        return jsonify({'message': 'Login successful', 'userId': str(user['_id'])})

    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/api/preferences/<user_id>', methods=['GET'])
def user_preferences(user_id):
    user_id = ObjectId(user_id)
    user = users_collection.find_one({'_id': user_id})

    if user:
        return jsonify({'preferences': user.get('notificationPreferences', [])})

    return jsonify({'message': 'User not found'}), 404

@app.route('/api/preferences/<user_id>', methods=['POST'])
def update_preferences(user_id):
    preferences = request.get_json()
    user_id = ObjectId(user_id)
    users_collection.update_one({'_id': user_id}, {'$set': {'notificationPreferences': preferences}})

    return jsonify({'message': 'Preferences updated successfully'})

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    user_id = ObjectId(data['userId'])
    flight_id = ObjectId(data['flightId'])

    existing_subscription = notifications_collection.find_one({
        'userId': user_id,
        'flightId': flight_id
    })

    if existing_subscription:
        return jsonify({'message': 'Already subscribed to this flight'}), 409

    new_notification = {
        'userId': user_id,
        'flightId': flight_id,
        'type': data['type']
    }
    notifications_collection.insert_one(new_notification)

    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='notifications')

    notification_message = json.dumps({
        'user_id': str(user_id),
        'flight_id': str(flight_id),
        'type': data['type']
    })
    channel.basic_publish(exchange='', routing_key='notifications', body=notification_message)
    connection.close()

    return jsonify({'message': 'Subscribed successfully'})

@app.route('/api/unsubscribe', methods=['POST'])
def unsubscribe():
    data = request.get_json()
    user_id = ObjectId(data['userId'])
    flight_id = ObjectId(data['flightId'])

    notifications_collection.delete_one({
        'userId': user_id,
        'flightId': flight_id
    })

    return jsonify({'message': 'Unsubscribed successfully'})

@app.route('/api/subscriptions/<user_id>', methods=['GET'])
def get_subscriptions(user_id):
    user_id = ObjectId(user_id)
    subscriptions = notifications_collection.find({'userId': user_id})
    subscription_list = [str(sub['flightId']) for sub in subscriptions]

    return jsonify({'subscriptions': subscription_list})

@app.route('/api/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    email_details = data.get('to')
    subject = data.get('subject')
    body = data.get('body')

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = 'parveenjaiswal2770@gmail.com' 
    msg['To'] = email_details

    try:
        print(f"Connecting to Gmail SMTP server...")
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            print(f"Logging in as ...")
            server.login('parveenjaiswal2770@gmail.com', 'lcjj mhed wxia gzhy')
            print(f"Sending email to {msg['To']}...")
            server.sendmail(msg['From'], [msg['To']], msg.as_string())
            print(f'Email sent to {msg["To"]}')
        return jsonify({'message': 'Email sent successfully'})
    except smtplib.SMTPException as e:
        print(f'Failed to send email: {str(e)}')
        return jsonify({'message': 'Failed to send email'}), 500

if __name__ == '__main__':
    app.run(debug=True)
