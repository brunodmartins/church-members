var request = require('request');

var requestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRkNORUZFUmtWQ1JVTkdNMFkzTlRBM09UVkdRMEpFUWtKQlFUWkdORFpDT0VKQ01FTkZNZyJ9.eyJpc3MiOiJodHRwczovL2NodXJjaHMuYXV0aDAuY29tLyIsInN1YiI6IlBXMjNhWkhpdTdNQk1ERnA4THY0eGVKS1NYMTFJYWRkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NodXJjaC1tZW1iZXJzLWFwaSIsImlhdCI6MTU2MDkwMjE0OSwiZXhwIjoxNTYwOTg4NTQ5LCJhenAiOiJQVzIzYVpIaXU3TUJNREZwOEx2NHhlSktTWDExSWFkZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.eKN0r84ejmUKn5WwD4S9mGySSZoNcmxTjMmoSd0ZeDcqavZ2w39IeAR8H89l1oe-XAnyjlhcfapHo-WNAFf3lrRyOTZgVvh9QEcq9aiErPI17Q5AmFQHAgJ_qzMLFU_hrPByArWj4DH8yzIcpTnf8mfXSvEnaZ-gCzIMzMV1H1bQoLVxmLBqL6poguA5eHfVcs9d7rTXn5UlAmoPY9iZx2MTU9Ro8dGaJ0juHL91pEo7GfAA8Qy5SWeOUZB2hxybnN7apsRTEoMbXv9YeYj6JMH2B9EuXPRZKI7SaIwzqThOw-R1O95m-yxOS5eKoCLAt1Xm4NIpZFuhzExbJO1SVw';

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
