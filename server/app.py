from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# Flask constructor takes the name of 
# current module (__name__) as argument.
app = Flask(__name__)

#initialize CORS
CORS(app)

# Create a database sqlite
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///circle_sync.db"

# config for perfomance NO Tracking
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

#create db instance
db = SQLAlchemy(app)


#deployement on render fixes
client_folder = os.path.join(os.getcwd(), "..", "client") #get frontend directory
dist_folder = os.path.join(client_folder,"dist") #get dist directory
# server static file from the "dist" folder under the "client" dir as home("/")
@app.route("/", defaults={"filename":""}) #server client as home in server-side url
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(dist_folder,filename)


# Mount api routes
import routes

# Create all tables
with app.app_context():
    db.create_all()

#run app.py
if __name__ == "__main__":
    app.run(debug=True)