import Character from "../Character";
import Bowman from "../Bowman";


test('should throw error for invalid name', () => {
  expect(() => new Character('A')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('VeryLongName')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Invalid', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('should level up the character correctly', () => {
  const character = new Bowman('Robin');
  console.log(character)
  const correct = {
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
    name: 'Robin',
    type: 'Bowman'
  }
  character.levelUp();
  expect(character).toEqual(correct)
});

test('should throw error if trying to level up a dead character', () => {
  const character = new Bowman('Robin');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('should apply damage correctly', () => {
  const character = new Bowman('Robin');
  character.damage(50);
  expect(character.health).toBeCloseTo(62.5); // 100 - 50 * (1 - 0.25)
});

test('should apply damage correctly if damage greater then health', () => {
  const character = new Bowman('Robin');
  character.health = 40
  character.defence = 0
  character.damage(50);
  expect(character.health).toEqual(0);
});

test('should not apply damage if character is already dead', () => {
  const character = new Bowman('Robin');
  character.health = 0;
  character.damage(50);
  expect(character.health).toBe(0);
});
