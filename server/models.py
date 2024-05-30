from app import db

# fields to include in db
class Friend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    gender = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String(200), nullable=True)

    # function to pass db info to client in json format || converts python dict to js json
    def to_json(self):
        return {
            "id":self.id,
            "name":self.name,
            "role":self.role,
            "description":self.description,
            "gender":self.gender,
            "imgUrl":self.img_url,
        }