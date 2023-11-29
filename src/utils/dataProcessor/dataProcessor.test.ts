import { processData } from './dataProcessor';

describe('processData', () => {
  test('should sum 2, 3, 4 in array', () => {
    const result = processData([2, 3, 4]);

    expect(result).toBe(9);
  });
});
