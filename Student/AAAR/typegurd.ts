export {};

function formatAmmount(money: number | string) {
  let formatAmmount = 'Rs. ' + parseInt(money);
}

function formatAmmount2(money: number | string) {
  if (typeof money == 'string') {
    let formatAmmount = 'Rs. ' + parseInt(money);
  } else {
    let formatAmmount = 'Rs. ' + money;
  }
}
