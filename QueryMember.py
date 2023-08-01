from flask import Flask, jsonify
from  pymongo.mongo_client import MongoClient
from flask_cors import CORS

app = Flask(__name__, static_folder = './build', static_url_path='/')
CORS(app)


def getMember():
    JSON_data = []
    url = "mongodb+srv://poonnawitsu:sFUJXWSdC4yNsPPf@cluster0.udno3ul.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(url)
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
    
    mydb = client["Projects"]
    mycol = mydb["User"]

    myquery = {}
    mydoc = mycol.find(myquery)  
    x = 0
    for i in mydoc:
        entry = {"id": x ,"user_name": i.get("user_name")}
        JSON_data.append(entry)
        x = x+1

    client.close()
    return JSON_data

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/members', methods=['GET'])
def get_data():
    data = getMember()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
