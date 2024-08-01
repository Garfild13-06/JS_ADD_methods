import Magician from "../Magician";

test('should create a valid Magician character', () => {
  const magician = new Magician('Gandalf');
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    name: 'Gandalf',
    level: 1,
    type: 'Magician'
  }
  expect(magician).toEqual(correct);
});
