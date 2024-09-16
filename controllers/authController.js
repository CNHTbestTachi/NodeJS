const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(username, hashedPassword);
    res.json({ message: 'User registered', user });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid username or password' });

    const token = jwt.sign({ id: user.id }, 'secretKey');
    res.json({ message: 'Login successful', token });
};
