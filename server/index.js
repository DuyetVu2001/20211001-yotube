const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const route = require('./routes');

const app = express();
const port = 4000;

// MongoDB
const run = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://youtube:youtube@youtube.jug43.mongodb.net/youtube-data?retryWrites=true&w=majority'
		);
		console.log('Connect to mongoDB successfully!');
		app.listen(port, () => {
			console.log('Server is running on port: ', port);
		});
	} catch (error) {
		console.error('MongoDB error: ', error);
	}
};

// Middleware
app.use(express.json());
app.use(cors());
route(app);

// Run
run();
