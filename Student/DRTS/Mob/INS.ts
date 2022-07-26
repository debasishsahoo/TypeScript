import sd = require('./IShowDetails');
import student = require('./Student');
import teacher = require('./Teacher');

function ShowAll_Details(obj: sd.IshowDetails) {
  obj.display();
}

ShowAll_Details(new student.Student());
ShowAll_Details(new teacher.Teacher());
