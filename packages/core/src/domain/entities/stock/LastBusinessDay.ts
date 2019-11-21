import Entity from '../Entity';

export default class LastBusinessDay implements Entity {
  constructor(
    public date: Date,
  ) {
  }
}
