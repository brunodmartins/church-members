var request = require('request');

var requestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRkNORUZFUmtWQ1JVTkdNMFkzTlRBM09UVkdRMEpFUWtKQlFUWkdORFpDT0VKQ01FTkZNZyJ9.eyJpc3MiOiJodHRwczovL2NodXJjaHMuYXV0aDAuY29tLyIsInN1YiI6IlBXMjNhWkhpdTdNQk1ERnA4THY0eGVKS1NYMTFJYWRkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NodXJjaC1tZW1iZXJzLWFwaSIsImlhdCI6MTU1OTYxMTI1OSwiZXhwIjoxNTU5Njk3NjU5LCJhenAiOiJQVzIzYVpIaXU3TUJNREZwOEx2NHhlSktTWDExSWFkZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.NhKUb1YIpXG1GKKymzkdhSjA5w6yuYNS7xvoB-7vdemU3tghKlWruIwFgU3-4WlwgguQ1ASw2ZOUYlO_N0JhIz8BIrn2FhfYLn8Yp1B5upvMC9AQf3gnQdZ8eLzv9U9T2iuvHPNYxtn1T8blj234LX2dIRHbFTVjFgwU40xbZdTxB2RQ427tT6DsUexaMChDctX-7IoGAcy5_Xq02iH3mErErYM-nz37MB8gOl3OIDQjq9Ag2cVUOq8KszKxUnHBOF9FL0y_cMkIq5tGN7C4q94HQw6cuAapyQqkyXUCua7irl8wIGmG9gkGehOXYg5G1VxoW9dsTlFnSWf8MTHAHg';

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

