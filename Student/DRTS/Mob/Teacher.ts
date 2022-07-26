import ShowDetails = require('./IShowDetails');

export class Teacher implements ShowDetails.IshowDetails {
  public display(): void {
    console.log('Teacher Details');
  }
}
