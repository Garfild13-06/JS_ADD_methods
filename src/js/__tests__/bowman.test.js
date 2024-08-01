import Bowman from "../Bowman";

test('should create a valid Bowman character', () => {
  const bowman = new Bowman('Robin');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    name: 'Robin',
    level: 1,
    type: 'Bowman'
  }
  expect(bowman).toEqual(correct);
});
