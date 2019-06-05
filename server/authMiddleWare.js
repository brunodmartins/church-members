var request = require('request');

var requestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRkNORUZFUmtWQ1JVTkdNMFkzTlRBM09UVkdRMEpFUWtKQlFUWkdORFpDT0VKQ01FTkZNZyJ9.eyJpc3MiOiJodHRwczovL2NodXJjaHMuYXV0aDAuY29tLyIsInN1YiI6IlBXMjNhWkhpdTdNQk1ERnA4THY0eGVKS1NYMTFJYWRkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NodXJjaC1tZW1iZXJzLWFwaSIsImlhdCI6MTU1OTcwMDk5NiwiZXhwIjoxNTU5Nzg3Mzk2LCJhenAiOiJQVzIzYVpIaXU3TUJNREZwOEx2NHhlSktTWDExSWFkZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.M-VHJ0PdcpgT9n58tq9YRd4iDemIACc0VzVM7LOYW_visdXTBFR5BY2uwBXgmY2Db0V_OXql-5camDOvs6weLZJG4NcFAugpr7Gx2Wh-VavKLVGKEAHhaneMHqrQaSWKFO2a64Ql9mUDxhNYu5ccAA1Fd9BNQw6b11OTnZyWtnVsGHv8pToVOOYHHMwhSDpeCBIO9voIVw0sfNzQLvA7lj1vOLfjFliW_HBUPVpQz02FfAexrqg2340XLQJ00MRl3eSqky0wfDMLpahkw-xiqe96FThazdAttYWtQ5RSdXjvwobDOw0jZN5vIYKAWBCLHDIEHzuwlzvoKQa0114F9w';

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

