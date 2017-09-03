function handleError(res, error, code) {
  console.log(`ERROR: ${error}`);
  res.status(code || 500).send({ error });
}

module.exports = handleError;
