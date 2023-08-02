from flask import Flask,  request, jsonify, render_template
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from pymongo import MongoClient
import certifi
import models


app = Flask(__name__)

projectId = 0
name = ""

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

@app.route('/login', methods=['POST'])
def projectLogin():
    return models.project().projectLogin()

@app.route('/getWebCam_Capacity', methods=['GET'])
def getWebCam_Capacity():
    return models.dashboard().getWebCam_Capacity()

@app.route('/getHeadset_Capacity', methods=['GET'])
def getHeadset_Capacity():
    return models.dashboard().getHeadset_Capacity()

@app.route('/getHeadset_Availability', methods=['GET'])
def getHeadset_Availability():
    return models.dashboard().getHeadsetAvailability()

@app.route('/getWebcam_Availability', methods=['GET'])
def getWebcam_Availability():
    return models.dashboard().getWebcamAvailability()

@app.route('/checkout', methods=['POST'])
def checkout():
    return models.dashboard().checkout()

@app.route('/checkin', methods=['POST'])
def checkin():
    return models.dashboard().checkin()

@app.route('/getdetails', methods=['GET'])
def getdetails():
    return models.dashboard().getdetails()

if __name__ == '__main__':
    app.run(debug=True)
