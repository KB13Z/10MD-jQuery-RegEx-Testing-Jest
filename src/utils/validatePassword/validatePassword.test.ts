import { validatePassword } from './validatePassword';

describe('validatePassword', () => {
  test('should validate less than 8 characters', () => {
    const result = validatePassword('se!1');

    expect(result).toEqual(false);
  });

  test('should validate 8-25 characters', () => {
    const result = validatePassword('seveneight!88');

    expect(result).toEqual(true);
  });

  test('should validate more than 25 characters', () => {
    const result = validatePassword('eighteighteight8eight!eighteight');

    expect(result).toEqual(false);
  });

  test('should validate letters', () => {
    const result = validatePassword('password123!');

    expect(result).toEqual(true);
  });

  test('should validate specific symbols (!, @, #, $, %, ^, &, *)', () => {
    const result = validatePassword('pass@word!123');

    expect(result).toEqual(true);
  });

  test('should validate numbers', () => {
    const result = validatePassword('pass@word!');

    expect(result).toEqual(false);
  });

  test('should validate non-specific symbols (for example, ":"', () => {
    const result = validatePassword('pass!word:123');

    expect(result).toEqual(false);
  });
});
