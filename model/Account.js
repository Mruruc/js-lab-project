
function Account(accountId,clientId,balance){
    this.accountId=accountId;
    this.clientId=clientId;
    this._balance=balance;
}

Account.prototype.getBalance=function(){return this._balance;}

export default Account;