from flask import Flask,  request, jsonify, render_template
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from pymongo import MongoClient
import certifi
import models


app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://localhost/APAD_app'
mongo = PyMongo(app)
client = MongoClient('mongodb+srv://srushtinandal29:lovedance2910@cluster0.x2dsham.mongodb.net/', tlsCAFile=certifi.where())
db = client.APAD_app
CORS(app)

@app.route('/signIn', methods=['POST'])
def signIn():
    return models.user().userSignIn()

@app.route('/createNewUser', methods=['POST'])
def createNewUser():
    return models.user().createNewUser()

@app.route('/createNewProject', methods=['POST'])
def createNewProject():
    return models.project().createProject()

if __name__ == '__main__':
    app.run(debug=True)
