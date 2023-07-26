from flask import Flask,  request, jsonify, render_template
import uuid
from passlib.hash import pbkdf2_sha256
from app import db
from cryptography.fernet import Fernet
import base64

#key = Fernet.generate_key()
#f = Fernet(key)
key = "B3cpAFLjfjWG41S5pXyC19WBWalycnMXmaE4Zg99TSs="
flag = 0

#with open('mykey.key', 'wb') as mykey:
   #mykey.write(key)

#with open('mykey.key', 'rb') as mykey:
   #key = mykey.read()

class user:
   
 
   def userSignIn(self):
      flag = 0
      f = Fernet(key)
      userdetails = {
          'email' : request.json['email'],
          'password' : request.json['password'],
      }     
            
      if db.users.find_one({"email": userdetails['email'], "password": userdetails['password']}):
        flag+=1
        return jsonify({'msg': "SignIn succcessful"})
            
      if flag == 0:
        return jsonify({'error': "invalid email id or password"}), 500
      

   def createNewUser(self):
        f = Fernet(key)
        confirmPassword = request.json['confirmPassword']
        newUser = {
            '_id': uuid.uuid4().hex,
            'firstName' : request.json['firstName'],
            'lastName' : request.json['lastName'],
            'preferredName' : request.json['preferredName'],
            'email' : request.json['email'],
            'contact' : request.json['contact'],
            'password' : request.json['password'],       
        }  
        if(db.user.find_one({ "email": newUser['email']})):  

            return jsonify({'msg': "Email id already exists please try signing or use another email"})
    
        else:
            if(newUser['password'] == confirmPassword):

                if db.users.insert_one(newUser):
                    return jsonify({'msg': "User Added Successfully"})     
                else:
                    return jsonify({'error': "error creating new user"}), 500
            else:
                return jsonify({'error': "Both the passwords are not matching"}),500
    
   

        

class project:
       
    def createProject(self):
       newProject = {
          '-id': uuid.uuid4().hex,
          'projectName': request.json['projectName'],
          'projectId': request.json['projectId']
       }
       db.projects.insert_one(newProject)
       return jsonify({'msg': "Project Added Successfuly"})
  
   
   



          