const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create(username, email, password);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user' });
    }
};

exports.login = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in' });
    }
};
