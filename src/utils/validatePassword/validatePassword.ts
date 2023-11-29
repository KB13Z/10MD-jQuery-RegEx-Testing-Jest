export const validatePassword = (password: string) => {
  const letters = /[a-zA-Z]/;
  const passwordHasLetter = letters.test(password);
  const numbers = /[0-9]/;
  const passwordHasNumber = numbers.test(password);
  const specificSymbols = /[!@#$%^&*]/;
  const passwordHasSpecificSymbol = specificSymbols.test(password);
  const invalidChars = /[^a-zA-Z0-9!@#$%^&*]/;
  const passwordHasInvalidChar = invalidChars.test(password);

  if (password.length >= 8
        && password.length <= 25
        && passwordHasLetter
        && passwordHasNumber
        && passwordHasSpecificSymbol
        && !passwordHasInvalidChar) {
    return true;
  } return false;
};
