// import cookie from 'react-cookie';
//
// const token = () => ({
//   headers: { Authorization: cookie.load('token') },
// });
//
// export default token;
const cookie = require('react-cookie');

module.exports = () => ({
  headers: { Authorization: cookie.load('token') },
});
