from app import app, db
from flask import request, jsonify
from models import Friend

# get all friends route
@app.route("/api/friends", methods=["GET"])
def get_friends():
    # interact with database using query.all
    friends = Friend.query.all()
    
    # convert friends(pyton objects) to Json and send it to cliend
    result = [friend.to_json for friend in friends] # result = [{...}, {...}, {...}]

    return jsonify(result), 200