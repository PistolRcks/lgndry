import { DiceFactory } from './dice-factory';

describe('DiceFactory', () => {
  it('should create an instance', () => {
    expect(new DiceFactory()).toBeTruthy();
  });
});
