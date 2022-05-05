//TypeScript Date Object
//1. new Date(): It creates a new date object with the current date and time.
let date: Date = new Date();
console.log('Date = ' + date);
//2.new Date(milliseconds): It creates a new date object as zero time plus milliseconds.
date= new Date(500000000000);
console.log('Date = ' + date);
//3. new Date(datestring): It creates a new date object from a date string.
date= new Date('2019-01-16');
console.log('Date = ' + date);
//4. new Date ( year, month, date[, hour, minute, second, millisecond ]): It creates a new date object with a specified date and time.
date = new Date(2018, 0o5, 0o5, 17, 23, 42, 11);
console.log('Date = ' + date);

date = new Date(2017, 4, 4, 17, 23, 42, 11);
date.setDate(13);
date.setMonth(13);
date.setFullYear(2013);
date.setHours(13);
date.setMinutes(13);
date.setSeconds(13);
console.log('Year = ' + date.getFullYear());
console.log('Date = ' + date.getDate());
console.log('Month = ' + date.getMonth());
console.log('Day = ' + date.getDay());
console.log('Hours = ' + date.getHours());
console.log('Minutes = ' + date.getMinutes());
console.log('Seconds = ' + date.getSeconds());
