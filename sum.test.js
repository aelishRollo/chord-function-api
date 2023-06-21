const sum = require('./sum');       //import the sum MODULE, not necessrily function. The sum module just happens to import the sum function

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 60 + 9 to equal 69', () => {
    expect(sum(60,9)).toBe(69);
  });