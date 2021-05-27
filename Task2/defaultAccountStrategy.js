module.exports = class DefaultAccountStrategy {
	constructor(account) {
		this.account = account;
	}

	depositFunds(amount) {
		return this.account.balance + amount;
	}

	withdrawFunds(amount) {
		let available_balance = this.account.balance;

		if (new Date() < new Date(this.account.credit_date)) {
			available_balance += this.account.credit_amount;
		}

		if (available_balance - amount > 0) {
			return this.account.balance - amount;
		} else {
			return this.account.balance;
		}
	}
}