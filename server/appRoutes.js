const express = require('express');
const request = require('request');
const router = new express.Router();
const {putRequestToken} = require('./authMiddleWare');
const host = 'https://church-members-api.herokuapp.com';
const bodyParser = require('body-parser');

router.use(putRequestToken);
router.use(express.json());
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
	let url = '';
	const reportType = req.query.type;
	switch (reportType) {
	case 'juridico':
		url = `${host}/reports/members/legal`;
		break;
	case 'completo':
		url = `${host}/reports/members`;
		break;
	case 'nascimento':
		url = `${host}/reports/members/birthday`;
		break;
	case 'casamento':
		url = `${host}/reports/members/marriage`;
		break;

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
