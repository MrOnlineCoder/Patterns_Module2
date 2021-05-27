module.exports = class BlockedAccountStrategy {
	constructor(account) {
		this.account = account;
	}

	depositFunds(amount) {
		console.log(`[!] Invalid operation: depositing to blocked card ${this.account.card_number} is not possible.`)
		return this.account.balance;
	}

	withdrawFunds(amount) {
		console.log(`[!] Invalid operation: withdrawing from blocked card ${this.account.card_number} is not possible.`)
		return this.account.balance;
	}
}