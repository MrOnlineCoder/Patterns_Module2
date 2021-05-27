const BankAccount = require('./account.js');

const good_account = new BankAccount({
	card_number: '5168 7551 8729 1462',
	credit_date: new Date(2022,1,1),
	expire_date: new Date(2022,1,1),
	credit_percent: 3,
	credit_amount: 500,
	balance: 0
});

const bad_account = new BankAccount({
	card_number: '4168 7851 2719 1462',
	credit_date: new Date(2022,1,1),
	expire_date: new Date(2020,1,1),
	credit_percent: 3,
	credit_amount: 300,
	balance: 750
});

console.log(good_account.getStatus());
good_account.depositFunds(100);
console.log(good_account.getStatus());
good_account.withdrawFunds(300);
console.log(good_account.getStatus());

console.log(bad_account.getStatus());
bad_account.depositFunds(100);
bad_account.withdrawFunds(250);
console.log(bad_account.getStatus());