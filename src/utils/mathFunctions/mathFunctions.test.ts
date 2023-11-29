import { add, multiply } from './mathFunctions';

describe('add', () => {
  test('should add 1 and 2', () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });
});

describe('multiply', () => {
  test('should multiply 4 and 5', () => {
    const result = multiply(4, 5);

    expect(result).toBe(20);
  });
});
