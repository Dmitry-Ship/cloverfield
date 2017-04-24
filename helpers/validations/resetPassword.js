const validateInput = (data) => {
  const errors = {};

  if (!data.password) {
    errors.password = 'you have to provide your new password';
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = 'you have to confirm your new password';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'passwords don`t match';
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};

module.exports = validateInput;
