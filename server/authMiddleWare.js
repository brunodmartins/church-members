var request = require("request");

var requestToken = "";

function putRequestToken(req, res, next){
    if (requestToken == "") {
        var options = {
            method: 'POST',
            url: 'https://churchs.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body: `{"client_id":"${process.env.AUTH_CLIENT_ID}","client_secret":"${process.env.AUTH_CLIENT_SECRET}","audience":"https://church-members-api","grant_type":"client_credentials"}` 
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            requestToken = JSON.parse(body).access_token;
            req.headers["Authorization"] = "Bearer " + requestToken;
            next();
        });        
    } else {
        req.headers["Authorization"] = "Bearer " + requestToken;
        next();
    }
}

module.exports = {
    putRequestToken
};

