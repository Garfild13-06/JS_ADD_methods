import Undead from "../Undead";

test('should create a valid Undead character', () => {
  const undead = new Undead('Skully');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    name: 'Skully',
    level: 1,
    type: 'Undead'
  }
  expect(undead).toEqual(correct);
});
