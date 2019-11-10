import CustomError from '../../error/CustomError';

export default class GeneralError extends CustomError {
  name = 'GeneralError';

  constructor() {
    super();
  }

  toString(): string {
    return `[${this.name}]:${this.message}
    ${this.data}`;
  }
}