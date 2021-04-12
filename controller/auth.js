// @desc 		Login
// @route  		POST /auth/login
// @access 		Public
const login = (req, h) => {
  const { username, password } = req.payload;

  return `Hello, ${username}!`;
};

module.exports = { login };
