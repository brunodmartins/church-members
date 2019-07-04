var request = require('request');

var requestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRkNORUZFUmtWQ1JVTkdNMFkzTlRBM09UVkdRMEpFUWtKQlFUWkdORFpDT0VKQ01FTkZNZyJ9.eyJpc3MiOiJodHRwczovL2NodXJjaHMuYXV0aDAuY29tLyIsInN1YiI6IlBXMjNhWkhpdTdNQk1ERnA4THY0eGVKS1NYMTFJYWRkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NodXJjaC1tZW1iZXJzLWFwaSIsImlhdCI6MTU2MjI1Mzk1NCwiZXhwIjoxNTYyMzQwMzU0LCJhenAiOiJQVzIzYVpIaXU3TUJNREZwOEx2NHhlSktTWDExSWFkZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.FyzCH7m0WwGUKfrrSAWzRZV85vZn9RZHz_zZ4ROn1Nz-eolP_-uwj1K7R9xbnZZ4XRDLFE2CgRJqaHMfPDHiuR2dRwg5bAzXmzvj8sTGIkiJPFjg8Fo6M2yPzi73kfLI2GIlXYE3rFrIHRD5CgavrBJbGgnRKJzvOfzuKA5NvOeLzvFqjJqIecbzgEepxX_R97lSuCkeNSiPXq8N6Q2kmh0Ou-XT79iTI9niMbtW-InIcvIziGg375DIsS7WHAmT2EKixWNQgBXkxbc6HJwZqG5l5GYTZ5mGL_gyfFXJ5tkXQRbou8VQHxJXJixhnvzz_V3Q5FXn7gzGH4y9LpjkXQ';

function putRequestToken(req, res, next){
	if (requestToken == '') {
		var options = {
			method: 'POST',
			url: 'https://churchs.auth0.com/oauth/token',
			headers: { 'content-type': 'application/json' },
			body: `{"client_id":"${process.env.AUTH_CLIENT_ID}","client_secret":"${process.env.AUTH_CLIENT_SECRET}","audience":"https://church-members-api","grant_type":"client_credentials"}`
		};
		request(options, function (error, response, body) {
			if (error) throw new Error(error);
			requestToken = JSON.parse(body).access_token;
			req.headers['Authorization'] = 'Bearer ' + requestToken;
			next();
		});
	} else {
		req.headers['Authorization'] = 'Bearer ' + requestToken;
		next();
	}
}

module.exports = {
	putRequestToken
};
