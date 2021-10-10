// @ get --> /auth --> get --> public
exports.get = (req, res) => {
	res.json('hello');
};

// @ post --> /auth --> post --> public
exports.post = (req, res) => {
	const dataRequest = req.body;

	res.json({ dataRequest });
};
