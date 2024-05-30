from app import app, db
from flask import request, jsonify
from models import Friend

# CRUD REST_APIS 

# READ
# get all friends route
@app.route("/api/friends", methods=["GET"])
def get_friends():
    try: 
        # interact with database using query.all
        friends = Friend.query.all()
        
        # convert friends(pyton objects) to Json and send it to cliend
        result = [friend.to_json() for friend in friends] # result = [{...}, {...}, {...}]

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error":str(e)}), 500

#CREATE 
# route to create a friend
@app.route("/api/friends", methods=["POST"])
def create_friends():
    try:
        data = request.json
        # check for all required fields
        required_fields = ["name", "role", "description", "gender"]

        for required_field in required_fields:
            if required_field not in data:
                return jsonify({"error": f"Missing required field: {required_field}"}), 400


        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")

        # fetch avatar image based on gender
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None

        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)

            #stage
        db.session.add(new_friend)
            #commit
        db.session.commit()

        return jsonify({"msg":" New Friend successfully created"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500

#DELETE A FRIEND ROUTE
@app.route("/api/friends/<int:id>", methods=["DELETE"])
def delete_friend(id):
    try:
        # get the friend from schema using their id 
        friend = Friend.query.get(id)

        # check if friend exists
        if friend is None:
            return jsonify({"error": "Friend Id not Found"})

        # if they exists delete them from the db
        db.session.delete(friend)
        # commit the changes
        db.session.commit()

        # return a success response
        return jsonify({"msg": " Friend Deleted successfully"})

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500

