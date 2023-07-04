# A Machine Learning Approach for Course Recommendation for Students

## Description

This is a Course Recommendation Application that provides personalized course recommendations for students based on their predicted grades and chosen orientations. The application has a TypeScript/React frontend for user interaction and a Flask backend to handle data processing and user authentication. The application leverages machine learning models to predict students' grades in different courses.

## Features

- User authentication for secure login and logout.
- Personalized course recommendations based on predicted grades and selected orientations.
- Updating student profiles to reflect changes in course choices and orientations.
- Predicting grades for specified courses using machine learning models.

## Technologies Used

### Backend

- Flask (Python web framework)
- Flask SQLAlchemy (Object-Relational Mapping)
- Flask Bcrypt (Password hashing)
- Flask JWT Extended (JSON Web Token handling)
- Flask CORS (Cross-Origin Resource Sharing)
- Flask Marshmallow (Serialization)
- Python-Dotenv (Environment variable handling)

### Frontend

- TypeScript
- React (JavaScript library for building user interfaces)

## Installation and Setup

1. Backend:

   - Make sure you have Python installed on your system (Python 3.7+ is recommended).
   - Install the required Python packages using pip:
     ```
     pip install flask flask_sqlalchemy flask_bcrypt flask_jwt_extended flask_cors flask_marshmallow python-dotenv
     ```

2. Frontend:
   - Make sure you have Node.js installed on your system (Node.js 12+ is recommended).
   - Navigate to the frontend directory and install the required packages using npm:
     ```
     cd frontend
     npm install
     ```

## How to Use

1. **User Login**: Users can log in using their username and password. Upon successful login, the backend generates a JWT that is used for authentication in subsequent requests.

2. **Course Recommendations**: After logging in, users can request personalized course recommendations based on their predicted grades and selected orientations. The backend processes the data and returns a list of recommended courses.

3. **Grade Predictions**: Users can request predicted grades for a list of specified courses for the current user. The backend uses machine learning models to calculate the predictions based on historical student data.

4. **Updating Student Profile**: Users can update their student profile to reflect changes in course choices and orientations. The backend stores and manages this data for future recommendations and predictions.

Note: The application's functionality may vary based on the availability of historical student data and the accuracy of machine learning models.

Features include:

- Recommend elective courses
- Predict grade
- Grade statistics
- Account setting
