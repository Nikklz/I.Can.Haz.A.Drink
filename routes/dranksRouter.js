
const express = require('express')
const dranksRouter = require('express').Router()
const dranksController = require('../controllers/dranksController')

// dranksRouter.get('/', dranksController.index);

dranksRouter.post('/', dranksController.create);

// dranksRouter.get('/new', dranksController.newBar);

// dranksRouter.get('/:id', dranksController.showOne, (req, res) => {
// 	res.render('../views/bars/one-bar.ejs', {
// 		data: res.locals.onebar
// 	})
// });

// dranksRouter.put('/:id/edit', dranksController.update);

// dranksRouter.delete('/:id', dranksController.delete);

module.exports = dranksRouter

