export {};
//Enum is class that represent Group of Constant
//By default Enum is Numaric
//we have to assign string by manully

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Month.January);
console.log(Month.February);
console.log(Month.March);
console.log(Month.April);

enum week {
  Sunday = 1,
  Monday = 2,
  Tuesday = 3,
  Wednesday = 4,
  Thrusday = 5,
  Friday = 6,
  Saturday = 7,
}

console.log(week.Monday);
console.log(week.Tuesday);
console.log(week.Wednesday);
console.log(week.Thrusday);
console.log(week.Friday);
console.log(week.Saturday);
console.log(week.Sunday);
console.log(week[1]);

enum branchs {
  CSE,
  ECE,
  EE,
  CE,
  ME,
}

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCode.NotFound);
console.log(StatusCode[200]);
console.log(StatusCode['Accepted']);

function DOB(weekday: week, month: Month, strem: branchs) {
  return `In the Month of ${month} and the day is ${weekday}, and branch:${strem}`;
}

console.log(DOB(week['3'], Month['3'], branchs['1']));
