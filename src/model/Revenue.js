import shortid from "shortid";

class Revenue {
  constructor(amount, account, source, description) {
    this.id = shortid.generate();
    this.currency = "PLN";
    this.amount = amount;
    this.account = account;
    this.source = source;
    this.description = description;
  }
}

export default Revenue;
