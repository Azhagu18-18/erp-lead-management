const { generateToken } = require("../utils/jwt");

const register = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Register API Working",
  });
};

const login = (req, res) => {
  const token = generateToken({
    id: 1,
    name: "Admin",
    role: "admin",
  });

  res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
  });
};

module.exports = {
  login,
  register,
};