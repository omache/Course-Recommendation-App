from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from datetime import timedelta
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from dotenv import load_dotenv
import os
 
load_dotenv()
app = Flask(__name__)

# Configuration
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///Database.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = os.getenv("SQLALCHEMY_TRACK_MODIFICATIONS")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=100)

# CORS
CORS(app, resources={r"*": {"origins": os.getenv("ORIGINS")}})

# Extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Create database tables
from .models import Account, Course, Student, Grade, Orientation, OrientationSchema,\
                                StudentSchema, GradeSchema, AccountSchema

 

student_data = {
    "fullName": "John Doe",
    "dateOfBirth": "2000-01-01",
    "email": "john.doe@example.com",
    "phoneNumber": "1234567890",
    "className": "Class A"
}

# Create a new student instance within the application context
with app.app_context():
    new_student = Student(
        fullName=student_data["fullName"],
        dateOfBirth=student_data["dateOfBirth"],
        email=student_data["email"],
        phoneNumber=student_data["phoneNumber"],
        className=student_data["className"]
    )

    # Add the new student to the database
    db.session.add(new_student)
    db.session.commit()




# Constants and Helpers
from  .constants import selective_courses, courses_without_data, predictions, model
from  .helpers import get_course_by_id, convert_prediction, calculate_student_average,\
                                predict_course_having_no_data, get_top_n_predictions

# Routes
from  .routes import login, logout, get_orientations, recommend_courses, get_all_courses,\
                                predict_courses, setting_account, update_password, get_all_grades


 

 

 
 