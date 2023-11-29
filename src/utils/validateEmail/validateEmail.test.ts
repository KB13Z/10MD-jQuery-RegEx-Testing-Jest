import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  test('should validate only one at symbol', () => {
    const result = validateEmail('cat@@mer.man');

    expect(result).toEqual(false);
  });

  test('should validate less than 2 characters in username part', () => {
    const result = validateEmail('a@mer.man');

    expect(result).toEqual(false);
  });

  test('should validate 2-25 characters in username part', () => {
    const result = validateEmail('cat@mer.man');

    expect(result).toEqual(true);
  });

  test('should validate more than 25 characters in username part', () => {
    const result = validateEmail('carmencarmencarmencarmencarmen@mer.man');

    expect(result).toEqual(false);
  });

  test('should validate numbers, letters, dots, underscores, plus signs in username part', () => {
    const result = validateEmail('c.at_12+3@mer.man');

    expect(result).toEqual(true);
  });

  test('should validate exclamation marks in username part', () => {
    const result = validateEmail('cat!123@mer.man');

    expect(result).toEqual(false);
  });

  test('should validate less than 7 characters in domain part', () => {
    const result = validateEmail('cat@si.man');

    expect(result).toEqual(false);
  });

  test('should validate 7-25 characters in domain part', () => {
    const result = validateEmail('cat@city.man');

    expect(result).toEqual(true);
  });

  test('should validate more than 25 characters in domain part', () => {
    const result = validateEmail('cat@citycitycitycitycitycity.man');

    expect(result).toEqual(false);
  });

  test('should validate alphanumeric characters, hyphens and dots in domain part', () => {
    const result = validateEmail('cat@city-123.man');

    expect(result).toEqual(true);
  });

  test('should validate * symbol in domain part', () => {
    const result = validateEmail('cat@city*123.man');

    expect(result).toEqual(false);
  });

  test('should validate less than 2 characters in last part', () => {
    const result = validateEmail('cat@mer.m');

    expect(result).toEqual(false);
  });

  test('should validate 2-6 characters after dot', () => {
    const result = validateEmail('cat@mer.com');

    expect(result).toEqual(true);
  });

  test('should validate more than 6 characters after dot', () => {
    const result = validateEmail('cat@mer.mantraa');

    expect(result).toEqual(false);
  });

  test('should validate alphanumeric characters in last part', () => {
    const result = validateEmail('car@mid.com');

    expect(result).toEqual(true);
  });

  test('should validate non-alphanumeric characters in last part', () => {
    const result = validateEmail('car@mid.1-1');

    expect(result).toEqual(false);
  });
});
