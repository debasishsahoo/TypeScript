import ShowDetails = require('./IShowDetails');
export class Student implements ShowDetails.IShowDetails {
  public display(): void {
    console.log('Student Details');
  }
}
