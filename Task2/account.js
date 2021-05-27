const DefaultAccountStrategy = require('./defaultAccountStrategy');
const BlockedAccountStrategy = require('./blockedAccountStrategy');

module.exports = class BankAccount {
	constructor({
		card_number,
		credit_date,
		expire_date,
		credit_percent,
		credit_amount,
		balance
	}) {
		this.card_number = card_number;
		this.credit_date = credit_date;
		this.expire_date = expire_date;
		this.balance = balance || 0;
		this.credit_amount = credit_amount || 0;
		this.credit_percent = credit_percent || 0;

		this.strategy_holder = new DefaultAccountStrategy(this);

		//we check for blocking on object creation
		//to ensure that our account is in valid state all the time
		this.checkForBlocking();
	}

	/*
		To prevent strategies from direct modification of the bank account balance value
		We make them just return the new balance value

		Which means that basically our strategies use 'bankAccount' just for reading
		And have not mutations in them
	*/

	depositFunds(amount) {
		this.balance = this.strategy_holder.depositFunds(amount);
	}

	withdrawFunds(amount) {
		this.balance = this.strategy_holder.withdrawFunds(amount);
	}

	getStatus() {
		return `Card ${this.card_number}, exp ${this.expire_date}, ${!this.is_blocked ? 'active' : 'blocked'}, ${this.balance} USD`;
	}

	checkForBlocking() {
		if (new Date() > new Date(this.expire_date)) {
			this.is_blocked = true;

			console.log(`[!] Card ${this.card_number} has been expired, please contact your local bank to get a new card.`)
		
			this.strategy_holder = new BlockedAccountStrategy(this);
		} else {
			this.is_blocked = false;
			this.strategy_holder = new DefaultAccountStrategy(this);
		}
	}
}