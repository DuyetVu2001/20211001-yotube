const authRoute = require('./auth');
const videoRoute = require('./video');
const commentRoute = require('./comment');

function route(app) {
	app.use('/auth', authRoute);
	app.use('/video', videoRoute);
	app.use('/comment', commentRoute);
}

module.exports = route;
