import Zombie from "../Zombie";

test('should create a valid Zombie character', () => {
  const zombie = new Zombie('Zombie');
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    name: 'Zombie',
    level: 1,
    type: 'Zombie'
  }
  expect(zombie).toEqual(correct);
});
