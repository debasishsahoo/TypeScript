import showDetails = require('./IShowDetails');
import student = require('./Student');
import teacher = require('./teacher');

function ShowAllDetails(obj: showDetails.IShowDetails) {
  obj.display();
}

ShowAllDetails(new student.Student());
ShowAllDetails(new teacher.Teacher());
