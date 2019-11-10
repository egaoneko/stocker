import Entity from '../Entity';

export default class Nation implements Entity {
  constructor(
    public code: string,
    public name: string,
  ) {
  }
}
