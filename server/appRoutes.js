const express = require("express");
const http = require("http");
const router = new express.Router();
const host = "disciples-api.herokuapp.com"


router.get("/api/members", function(req, res) {
    let members = [];
    var options = {
        host,
        path: '/api/disciples/membro',
        method: 'GET'
    };
    http.request(options, function(response) {
        response.setEncoding('utf8');
        let rawData = '';
        response.on('data', (chunk) => { rawData += chunk; });
        response.on('end', function() {
            const parsedData = JSON.parse(rawData);
            res.send(parsedData);
        });
      }).end();    
});

module.exports = {
    router
}