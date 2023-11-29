export const validateName = (name: string) => {
  const onlyLetters = /^[A-Za-z]+$/;

  if (name.length >= 2 && name.length <= 50 && onlyLetters.test(name)) {
    return true;
  }
  return false;
};
