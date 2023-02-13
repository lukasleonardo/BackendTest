class InvalidCpfException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCpfException";
  }
}

class ExistsCpfException extends Error {
  constructor(message) {
    super(message);
    this.name = "ExistsCpfException";
  }
}

class NotFoundCpfException extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundCpfException";
  }
}

module.exports = {
  NotFoundCpfException,
  ExistsCpfException,
  InvalidCpfException,
};
