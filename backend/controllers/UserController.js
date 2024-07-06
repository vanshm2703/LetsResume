const User = require("../models/userschema");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      // User already exists
      return res.status(400).json({ message: "User already exists" });
    } else {
      // Create new user
      const newUser = new User({ firstName, lastName, email }); // Create a new instance of User
      await newUser.save();
      res.status(201).json(newUser); // Return newly created user
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
