module.exports = () => ({
  headers: { Authorization: localStorage.getItem('token') },
});
