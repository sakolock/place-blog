import { hashPassword } from './utils';

const jwt = require('jsonwebtoken');

const register = async ({username, email, password}) => {
  try {
    const res = await fetch(`${process.env.RAZZLE_API_PATH}/users`, {
      method: 'POST',
      params: {
        user: {
          username,
          email,
          password: hashPassword(password)
        }
      }
    });
    const data = await res.json();
    console.log(data);
    // jwt.sign(data, process.env.RAZZLE_JWT_SECRET)
    return data;
  } catch (e) {

  }
};

const login = async ({email, password}) => {
  try {
    const res = await fetch(`${process.env.RAZZLE_API_PATH}/users/sign_in`, {
      method: 'POST',
      params: {
        user: {
          email,
          password: hashPassword(password),
        }
      }
    })
    return await res.json();
  } catch (error) {
    console.error('arg')
  }
};

const logout = async () => {
  // localStorage.removeItem("user");
  try {
    const res = await fetch(`${process.env.RAZZLE_API_PATH}/signout`);
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

const getCurrentUser = () => {
  // return JSON.parse(localStorage.getItem("user"));
};

export {
  register,
  login,
  logout,
  getCurrentUser,
};
