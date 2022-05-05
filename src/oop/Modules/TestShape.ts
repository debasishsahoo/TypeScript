import showDetails = require('./IShowDetails');
import student = require('./Student');
import teacher = require('./Teacher');

function showAllDetails(detailsToShow: showDetails.IShowDetails) {
  detailsToShow.display();
}

showAllDetails(new student.Student());
showAllDetails(new teacher.Teacher());
