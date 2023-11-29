import { validateName } from './validateName';

describe('validateName', () => {
  test('should validate 1 character', () => {
    const result = validateName('a');

    expect(result).toEqual(false);
  });

  test('should validate 5 characters', () => {
    const result = validateName('Laura');

    expect(result).toEqual(true);
  });

  test('should validate more than 50 characters', () => {
    const result = validateName('thisIsAVeryLongSentenceWhyShouldAnyoneNeedItIDoNotKnowThis');

    expect(result).toEqual(false);
  });

  test('should validate only letters', () => {
    const result = validateName('thereAreOnlyLetters');

    expect(result).toEqual(true);
  });

  test('should validate non-letters', () => {
    const result = validateName('th!$ l00k$ m0re l!ke pa$$w0rd?');

    expect(result).toEqual(false);
  });
});
