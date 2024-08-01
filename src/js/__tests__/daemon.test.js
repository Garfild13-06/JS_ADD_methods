import Daemon from "../Daemon";

test('should create a valid Daemon character', () => {
  const daemon = new Daemon('Diablo');
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    name: 'Diablo',
    level: 1,
    type: 'Daemon'
  }
  expect(daemon).toEqual(correct);
});
