//Numeric Enum
//String Enum
//Heterogeneous Enum

//String Enum
enum BTECH {
  CIVIL = 'CIVIL ENGG',
  MACH = 'MACHNACAL ENGG',
  EC = 'ELECTRAL ENGG',
  ECE = 'ELECTRONIC ENGG',
  CS = 'COMPUTER SCIENCE',
}

enum Student {
  'SAHNIK',
  'SOUMYDEEP',
  'SOURAV',
}

enum SALARY {
  SAHNIK = 14000,
  SOUMYDEEP = 24000,
  SOURAV = 34000,
}

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function IsItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jan:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(IsItSummer(Month.Feb));
