const express = require('express');
const request = require('request');
const router = new express.Router();
const {putRequestToken} = require('./authMiddleWare');
const host = 'https://church-members-api.herokuapp.com';


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
