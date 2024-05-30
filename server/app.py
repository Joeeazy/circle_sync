from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

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

# Mount routes
import routes

# Create all tables
with app.app_context():
    db.create_all()

#run app.py
if __name__ == "__main__":
    app.run(debug=True)