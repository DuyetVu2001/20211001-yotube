const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const route = require('./routes');

const app = express();
const port = 4000;
dotenv.config();

// MongoDB
const run = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
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
