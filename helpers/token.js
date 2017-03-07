import getCookie from './getCookie';

module.exports = () => ({
  headers: { Authorization: getCookie('token') },
});
