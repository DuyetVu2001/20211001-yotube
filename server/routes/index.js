const authRoute = require('./auth');
const videoRoute = require('./video');

function route(app) {
	app.use('/auth', authRoute);
	app.use('/video', videoRoute);
}

module.exports = route;
