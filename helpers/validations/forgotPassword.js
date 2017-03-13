const validateInput = (data) => {
  const errors = {};

  if (data.email === '' || null) {
    errors.email = 'you have to provide your email';
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};

module.exports = validateInput;
