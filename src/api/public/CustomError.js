class InvalidCpfException extends Error {
  constructor() {
    super("CPF is not Valid.");
    this.type = "InvalidCpfException";
  }
}

class ExistsCpfException extends Error {
  constructor() {
    super("CPF already exists.");
    this.type = "ExistsCpfException";
  }
}

class NotFoundCpfException extends Error {
  constructor() {
    super("CPF is not Found");
    this.type = "NotFoundCpfException";
  }
}

module.exports = {
  NotFoundCpfException,
  ExistsCpfException,
  InvalidCpfException,
};
