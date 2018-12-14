
module.exports = [
	{
		url: '/',
		middleware: (ctx, next) => next(),
		controller: 'home.test'
	}, {
		url: '/napi/login/register',
		method: 'post',
		controller: 'api.napi.register'
	},
]