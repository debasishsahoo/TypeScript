import showDetails = require('./IShowDetails');
export class Teacher implements showDetails.IShowDetails {
  public display() {
    console.log('Teacher details.');
  }
}
