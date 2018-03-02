const dranksModel = require('../models/dranksModel')
const dranksController = {};

dranksController.index = (req,res,next) => {
	dranksModel.findAll()
	.then(results => {
		res.json({
			data:results
		})
	})
	.catch(err => {
		res.status(500).json({
			data: 'no data'
		})
	})
};

dranksController.create = (req,res,next) => {
	dranksModel.save(req.params.id)
	.then(results => {
		res.render('../views/bars/add-bar.ejs',{
			data:results
		})
	}).catch(err =>{
		res.status(500).json({
			data:'no data'
		})
	})
}

dranksController.newBar = (req, res, next) => {
    res.locals.newBar = {
      barname: "",
      address: "",
      zipcode: "",
      phone_number: "",
      bartype: ""
    }
    next()
  }


dranksController.showOne = (req,res, next) => {
	dranksModel.findOne(req.params.id)
	.then(results => {
		res.locals.onebar = results
		next()
	})
		
		// {
		// res.render ('../views/bars/one-bar.ejs',{
		// 	data: results
		// })
		// })
	.catch(err => next(err))
// {
// 		res.status(500).json({
// // 			data:'no data'
// 		})
// 	})
}

dranksController.update =(req,res) =>{
	dranksModel.update ({
		name: req.body.name,
		address: req.body.address,
		zipcode: req.body.zipcode,
		phone: req.body.phone,
		type: req.body.type,
		cost: req.body.cost,
		id: req.body.id
	}).then(results => {
		res.findById(req.params.id).then(bars =>{
			res.render('views/bars/edit-bar',{
				data: bars
			})
		})
	}).catch(err =>{
		res.status(500).json({
			data:'no-data'
		})
	})
}
dranksController.delete =(req,res) => {
	dranksModel.destroy(req.params.id)
	.then(results => {
		res.json({
			data:data
		})
	})
	.catch(err => {
		res.status(500).json({
			message: 'error',
			error: err
		})
	})
}

module.exports = dranksController