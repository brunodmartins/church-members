const express = require('express');
const request = require('request');
const router = new express.Router();
const {putRequestToken} = require('./authMiddleWare');
const host = 'https://church-members-api.herokuapp.com';
const reportHost = 'https://church-reports-api.herokuapp.com';
const bodyParser = require("body-parser");

router.use(putRequestToken);
router.use(express.json())
router.post('/api/members/search', function(req, res) {
	const options = {
		url: `${host}/members/search`,
		headers: {
			'Authorization': req.headers['Authorization']
		},
		body: req.body.query
	};
	request.post(options, function (error, response, body) {
		res.send(body);
	});
});

router.get('/api/reports/download', bodyParser.raw(), function(req, res) {
	let url = ''
	if(req.query.type == 'juridico') {
		url = `${reportHost}/reports/members`;
	}else {
		url = `${reportHost}/reports/aniversariantes/${req.query.type}`;
	}
	
	const options = {
		url,
		headers: {
			'Authorization': req.headers['Authorization']
		},
	};
	request.get(options).pipe(res);
});

router.get('/api/members/:id', function(req, res) {
	const options = {
		url: `${host}/members/${req.params.id}`,
		headers: {
			'Authorization': req.headers['Authorization']
		} 
	};
	request(options, function (error, response, body) {
		res.send(body);
	});
});

module.exports = {
	router
};
