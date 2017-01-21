import cookie from 'react-cookie';

const token = {
  headers: { Authorization: cookie.load('token') },
};

export default token;
