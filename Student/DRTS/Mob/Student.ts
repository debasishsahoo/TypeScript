import ShowDetails = require('./IShowDetails');

export class Student implements ShowDetails.IshowDetails {
  public display(): void {
    console.log('Student Details');
  }
}
