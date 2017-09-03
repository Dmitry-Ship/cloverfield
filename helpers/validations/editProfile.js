const validateInput = (data) => {
  const errors = {};

  if (!data.username) {
    errors.username = 'you have to provide your username';
  }

  if (!data.email) {
    errors.email = 'you have to provide your email';
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};

module.exports = validateInput;