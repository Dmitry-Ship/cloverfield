const validateInput = (data) => {
  const errors = {};

  if (!data.oldPassword) {
    errors.oldPassword = 'you have to provide your old password';
  }

  if (!data.newPassword) {
    errors.newPassword = 'you have to provide your new password';
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};

module.exports = validateInput;
