import Swordsman from "../Swordsman";

test('should create a valid Swordsman character', () => {
  const swordsman = new Swordsman('Arthur');
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    name: 'Arthur',
    level: 1,
    type: 'Swordsman'
  }
  expect(swordsman).toEqual(correct);
});
