const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/auth");

exports.registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    await User.create({ fullname, email, password: hash });
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred!! " });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send({ message: "Invalid login credentials" });
    }
    const payload = { userId: user._id };
    const token = generateToken(payload);
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred while logging in" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred!!" });
  }
};
