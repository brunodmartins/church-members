var request = require('request');

var requestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRkNORUZFUmtWQ1JVTkdNMFkzTlRBM09UVkdRMEpFUWtKQlFUWkdORFpDT0VKQ01FTkZNZyJ9.eyJpc3MiOiJodHRwczovL2NodXJjaHMuYXV0aDAuY29tLyIsInN1YiI6IlBXMjNhWkhpdTdNQk1ERnA4THY0eGVKS1NYMTFJYWRkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NodXJjaC1tZW1iZXJzLWFwaSIsImlhdCI6MTU2MTA0OTMyOSwiZXhwIjoxNTYxMTM1NzI5LCJhenAiOiJQVzIzYVpIaXU3TUJNREZwOEx2NHhlSktTWDExSWFkZCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jCkwcQ1v3ytqIVNn2kDqaOeyy-5MG1sJYCGff1-kciTo9KMgzYvveHS4ILWCt1rEPTgVHLna-zVGGwxb0U74mzMEYmFuDWY-sSkAjrL3V93RGGGoF7kchqfiHZQYi477k_dtmqAu85XKH0QLO-wQJdZzPpY9LPCB71j5euPkqx-xUVcAKDzJbu7TOsQ2grEY0-k8cL6ygLaE_KXjXkU3Zf3lkUoetnfwK0PG1aGnrY29bBbIFjA7XMsKpk4mOSokq-E-AadYKzoCIM_BVC6TnYskh59YEkP8vEM8q-SKqITtqH_YwIbE3hlqbuS0NQMY_Y6tn-fNwskigp4E3EJHUA';

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
