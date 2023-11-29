export const validateEmail = (email: string) => {
  const regexAt = /@/;
  const atCount = (email.match(regexAt)).length;
  const atIndex = email.indexOf('@');
  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex + 1);
  const lastDotIndex = email.lastIndexOf('.');
  const lastPart = email.substring(lastDotIndex + 1);
  const usernameRegex = /^[a-zA-Z0-9._+]+$/;
  const domainRegex = /^[a-zA-Z0-9.-]+$/;
  const lastPartRegex = /^[a-zA-Z0-9]+$/;

  if (atCount === 1
    && username.length >= 2
    && username.length <= 25
    && usernameRegex.test(username)
    && domain.length >= 7
    && domain.length <= 25
    && domainRegex.test(domain)
    && lastPart.length >= 2
    && lastPart.length <= 6
    && lastPartRegex.test(lastPart)) {
    return true;
  } return false;
};
