var request = require('request');

var requestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRkNORUZFUmtWQ1JVTkdNMFkzTlRBM09UVkdRMEpFUWtKQlFUWkdORFpDT0VKQ01FTkZNZyJ9.eyJpc3MiOiJodHRwczovL2NodXJjaHMuYXV0aDAuY29tLyIsInN1YiI6IlBXMjNhWkhpdTdNQk1ERnA4THY0eGVKS1NYMTFJYWRkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NodXJjaC1tZW1iZXJzLWFwaSIsImlhdCI6MTU2MTA4OTU1MSwiZXhwIjoxNTYxMTc1OTUxLCJhenAiOiJQVzIzYVpIaXU3TUJNREZwOEx2NHhlSktTWDExSWFkZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.QwVx9roaMq3PuFDhQGSgLBcaEEfR3VlTyULh9_FUBiSw4MeqW6GfYuyKHFi-vDK6YI6wKqX0NcAPzty-Gksi5oOK1cMhhaBuixt6x2buJhykOKx3ZAnssCEJGF4tkbX9b85VKePNUIOZjT5DSETM2fnMOM9Hnssz_Sz7PNyg-PUSyqSmS3ICoyS5el-HDI5OgoByz1yVRP-rsA5RjYiFjeNtZiUkd4HkZxTGgxFkmGng7Y6wdoFS0IriW-su1SrOEVvMR_Gns7axAEE_SJ0xrGUiVWaE0PK2qp9ALUvCKgqcUtY_VGzimjSHSaOIlhB6I_FAVDFXSrwJER4254KQzA';

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
