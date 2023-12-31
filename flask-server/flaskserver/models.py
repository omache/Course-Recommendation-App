from flaskserver import db, ma, bcrypt
from marshmallow import post_load, fields

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fullName = db.Column(db.String(100))
    dateOfBirth = db.Column(db.String(50))
    email = db.Column(db.String(50))
    phoneNumber = db.Column(db.String(10))
    className = db.Column(db.String(10))
    

    def __init__(self, fullName=None, dateOfBirth=None, email=None, phoneNumber=None, className=None):
        if fullName is not None:
            self.fullName = fullName
        if dateOfBirth is not None:
            self.dateOfBirth = dateOfBirth
        if email is not None:
            self.email = email
        if phoneNumber is not None:
            self.phoneNumber = phoneNumber
        if className is not None:
            self.className = className

 

class Account(db.Model):
    __tablename__ = 'account'
    username = db.Column(db.String(20), unique=True, index=True, nullable=False, primary_key=True)
    userId = db.Column(db.String(8), db.ForeignKey('student.id'), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    avatar = db.Column(db.String(500))

    def __init__(self, password=None, avatar=None):
        if password is not None:
            self.password = password
        if avatar is not None:
            self.avatar = avatar

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

class Course(db.Model):
    __tablename__ = 'course'
    id = db.Column(db.String(10), primary_key=True)
    courseName = db.Column(db.String(100), nullable=False)
    orientation = db.Column(db.String(100), db.ForeignKey('orientation.id'))

class Orientation(db.Model):
    __tablename__ = 'orientation'
    id = db.Column(db.String(10), primary_key=True)
    orientationName = db.Column(db.String(100), nullable=False)

class Grade(db.Model):
    __tablename__ = 'grade'
    studentId = db.Column(db.String(8), db.ForeignKey('student.id'), nullable=False, primary_key=True)
    courseId = db.Column(db.String(10), db.ForeignKey('course.id'), nullable=False, primary_key=True)
    grade = db.Column(db.Float)


class OrientationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'orientationName')

class StudentSchema(ma.Schema):
    class Meta:
        fields = ('fullName', 'dateOfBirth', 'email', 'phoneNumber', 'className')

    fullName = fields.String(required=False, allow_none = True)
    email = fields.String(required=False, allow_none = True)
    phoneNumber = fields.String(required=False, allow_none = True)
    className = fields.String(required=False, allow_none = True)
    dateOfBirth = fields.String(required=False, allow_none = True)
    

    @post_load
    def make_student(self, data, **kwargs):
        return Student(**data)

class GradeSchema(ma.Schema):
    class Meta:
        fields = ("courseId", "courseName", "grade")

class AccountSchema(ma.Schema):
    class Meta:
        fields = ("password", "avatar")

    password = ma.String(validate=lambda x: 7 < len(x) < 128)
    avatar = ma.String(validate=lambda x: len(x) < 500)

    @post_load
    def make_account(self, data, **kwargs):
        return Account(**data)

class CourseSchema(ma.Schema):
    class Meta:
        fields = ("courseId", "courseName", "orientationId", "orientationName")

