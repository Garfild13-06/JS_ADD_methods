import {Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from '../Characters';
import Character from '../Character';

test('should create a valid Bowman character', () => {
  const character = new Bowman('Robin');
  expect(character).toBeInstanceOf(Character);
  expect(character.name).toBe('Robin');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('should create a valid Swordsman character', () => {
  const character = new Swordsman('Arthur');
  expect(character).toBeInstanceOf(Character);
  expect(character.name).toBe('Arthur');
  expect(character.type).toBe('Swordsman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('should create a valid Magician character', () => {
  const character = new Magician('Gandalf');
  expect(character).toBeInstanceOf(Character);
  expect(character.name).toBe('Gandalf');
  expect(character.type).toBe('Magician');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('should create a valid Daemon character', () => {
  const character = new Daemon('Diablo');
  expect(character).toBeInstanceOf(Character);
  expect(character.name).toBe('Diablo');
  expect(character.type).toBe('Daemon');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('should create a valid Undead character', () => {
  const character = new Undead('Skully');
  expect(character).toBeInstanceOf(Character);
  expect(character.name).toBe('Skully');
  expect(character.type).toBe('Undead');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('should create a valid Zombie character', () => {
  const character = new Zombie('Zombie');
  expect(character).toBeInstanceOf(Character);
  expect(character.name).toBe('Zombie');
  expect(character.type).toBe('Zombie');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('should throw error for invalid name', () => {
  expect(() => new Bowman('A')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Bowman('VeryLongName')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Invalid', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('should level up the character correctly', () => {
  const character = new Bowman('Robin');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30); // 25 * 1.2
  expect(character.defence).toBe(30); // 25 * 1.2
  expect(character.health).toBe(100);
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

test('should not apply damage if character is already dead', () => {
  const character = new Bowman('Robin');
  character.health = 0;
  character.damage(50);
  expect(character.health).toBe(0);
});
