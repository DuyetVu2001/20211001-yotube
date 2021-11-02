const userRoute = require('./user');
const videoRoute = require('./video');
const commentRoute = require('./comment');

function route(app) {
	app.use('/user', userRoute);
	app.use('/video', videoRoute);
	app.use('/comment', commentRoute);
}

module.exports = route;
