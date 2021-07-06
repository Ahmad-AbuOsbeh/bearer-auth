'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  let basic = req.headers.authorization.split(' ');
  console.log('basic', basic);
  let encoded = basic[1];
  console.log('hello from basic');

  let [user, pass] = await base64.decode(encoded).split(':');

  console.log('[user, pass]', user, pass);
  // const headers = req.headers.authorization.split(' '); // ['Basic','pw=res4]
  // if (!headers[0] === 'Basic') next('Wrong Authorization headers');
  // const decodedPass = base64.decode(headers[1]); //'mahmoud:1234'
  // const [username, password] = decodedPass.split(':');

  try {
    req.user = await User.authenticateBasic(user, pass);
    console.log('req.user', req.user);

    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }
};
