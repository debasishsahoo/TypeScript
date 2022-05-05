import BankMember from './BankMember';

const chuck = new BankMember(`Chuck`);

console.log(`\nCreating ${chuck.name}'s new savings account.`);
chuck.createSavingsAccount(150);
console.log(`Chuck's starting savings balance: $${chuck.getSavingsBalance()}`);

console.log(`\nCreating ${chuck.name}'s new checking account.`);
chuck.createCheckingAccount(500);
console.log(
  `Chuck's starting checking balance: $${chuck.getCheckingBalance()}`
);

console.log('\nDepositing funds into savings.');
chuck.depositToSavings(150);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log('Depositing funds into checking.');
chuck.depositToChecking(75);
console.log(`Chuck's checking balance: $${chuck.getCheckingBalance()} \n`);

console.log('Withdrawing funds from Savings');
chuck.withdrawFromSavings(6);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log('Withdrawing funds from Savings');
chuck.withdrawFromSavings(124);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log('Withdrawing funds from Savings');
chuck.withdrawFromSavings(89);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log('Withdrawing funds from Savings');
chuck.withdrawFromSavings(24);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log('Withdrawing funds from checking');
chuck.withdrawFromChecking(200);
console.log(`Chuck's checking balance: $${chuck.getCheckingBalance()} \n`);

console.log('Withdrawing funds from checking');
chuck.withdrawFromChecking(350);
console.log(`Chuck's checking balance: $${chuck.getCheckingBalance()} \n`);
