import Constants from '../config/constants';

const username = (value, message) => {
  /**
   * 1. Only contains alphanumeric characters.
   * 2. Number of characters must be between 8 to 20.
   */
  if (value) {
    const result = Constants.validationRegex.username.test(value);
    if (!result) return { error: true, message };
  }
  return { error: false };
};

const password = (value, message) => {
  /**
   * 1. At least one upper case English letter, (?=.*?[A-Z])
   * 2. At least one lower case English letter, (?=.*?[a-z])
   * 3. At least one digit, (?=.*?[0-9])
   * 4. At least one special character, (?=.*?[#?!@$%^&*-])
   * 5. Minimum eight in length .{8,} (with the anchors)
   */
  if (value) {
    const result = Constants.validationRegex.password.test(value);
    if (!result) return { error: true, message };
  }
  return { error: false };
};

const required = (value, message) => {
  if (!value || !value.toString().trim().length) {
    return { error: true, message };
  }
  return { error: false };
};

const inputValidation = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error.error) {
        return error;
      }
    }
  }
  return false;
};

export { username, password, required, inputValidation };
