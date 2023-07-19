from flask import Flask,  request, jsonify, render_template
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/APAD_app'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.users
@app.route("/app")
def index():
    return '<h1>Hello World</h1>'

@app.route("/home")
def index():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)