import Entity from '../Entity';
import Nation from '../nation/Nation';

export default class Market implements Entity {
  constructor(
    public name: string,
    public nation: Nation,
  ) {
  }
}
