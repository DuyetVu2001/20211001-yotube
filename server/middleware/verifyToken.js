const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	// const authHeader = req.header('Token');
	const authHeader = req.headers.token;

	if (!authHeader)
		return res.status(401).json({
			success: false,
			message: 'You are not authenticated!',
		});

	// Verify token
	const token = authHeader.split(' ')[1];
	jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
		if (err) {
			return res.status(403).json('Token is not valid!');
		}
		req.user = user;
		next();
	});
};

module.exports = verifyToken;
