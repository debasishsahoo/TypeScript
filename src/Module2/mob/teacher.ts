import ShowDetails = require('./IShowDetails');
export class Teacher implements ShowDetails.IShowDetails {
  public display(): void {
    console.log('Teacher Details');
  }
}
