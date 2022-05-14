  let empId: number = 1;
  let empName: string = 'Sagnik';

  let employee,manger,superlol: [number, string] = [empId, empName];

  //RGB
  let Color: [number, number, number] = [255, 0, 0];

  //optional parameter [?]
  let BGCOLOR, HEADERCOLOR,hdgfgll: [number, number, number, number?];

  BGCOLOR = [0, 255, 255, 0.5];

  HEADERCOLOR = [0, 255, 0];

  //Tuple Array
  let emp: [number, string][];
  emp = [
    [11, 'Sourav'],
    [200000, 'RUP'],
    [3.5, 'SAGNIK'],
    [47, 'Aranb'],
    [5, 'Tan'],
  ];

  console.log(emp[2][1]);
