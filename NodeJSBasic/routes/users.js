var express = require('express');
var router = express.Router();
var cors = require('cors')
router.use(cors())
/* GET users listing. */

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://me:me@cluster0-qyubn.azure.mongodb.net/Numer');
//mongodb+srv://('dbUser:<password>@datanumer-qyubn.azure.mongodb.net/test?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://me:me@cluster0-qyubn.azure.mongodb.net/Numer');
//mongodb+srv://me:<password>@cluster0-qyubn.azure.mongodb.net/test?retryWrites=true&w=majority
var db = mongoose.connection;
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var mySchema = mongoose.Schema({
	id: ObjectId,
	key: String,
	fx: String,
	xr: String,
	xl: String,
	x: String,
	A: Number,
	B: Number,
	error: String
});
var MyModel = mongoose.model('MyModel', mySchema, 'data');
console.log('connect')
router.get('/', function (req, res, next) {
	var obj = [{ name: 1, fx: 'x+1' }]
	res.json(obj)
});

router.get('/1', function (req, res, next) {
	MyModel.find({ key: 'test' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
//------------------------------------Root of Eqaution---------------------------------
router.get('/Bisection', function (req, res, next) {
	MyModel.find({ key: 'Bisection' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/False-position', function (req, res, next) {
	MyModel.find({ key: 'False-position' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/One-Point', function (req, res, next) {
	MyModel.find({ key: 'One-Point' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Newton-Rahpson', function (req, res, next) {
	MyModel.find({ key: 'Newton-Rahpson' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Secant', function (req, res, next) {
	MyModel.find({ key: 'Secant' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Secant', function (req, res, next) {
	MyModel.find({ key: 'Secant' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Secant', function (req, res, next) {
	MyModel.find({ key: 'Secant' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Secant', function (req, res, next) {
	MyModel.find({ key: 'Secant' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Secant', function (req, res, next) {
	MyModel.find({ key: 'Secant' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/LUDecom', function (req, res, next) {
	MyModel.find({ key: 'LUDecom' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Trap', function (req, res, next) {
	MyModel.find({ key: 'Trap' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});

/*
router.get('/falsePosition', function (req, res, next) {
	MyModel.find({ key: 'falsePosition' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Graphical', function (req, res, next) {
	MyModel.find({ key: 'Graphical' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});

router.get('/NewtonRaphson', function (req, res, next) {
	MyModel.find({ key: 'NewtonRaphson' }, function (err, docs) {
		//console.log(docs)
		res.json(docs)
	})
});
router.get('/Onepoint', function (req, res, next) {
	MyModel.find({ key: 'Onepoint' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});

router.get('/Taylor', function (req, res, next) {
	MyModel.find({ key: 'Taylor' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Secant', function (req, res, next) {
	MyModel.find({ key: 'Secant' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/Linear', function (req, res, next) {
	MyModel.find({ key: 'Linear' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/h', function (req, res, next) {
	MyModel.find({ key: 'h' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});
router.get('/h2', function (req, res, next) {
	MyModel.find({ key: 'h2' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});*/

module.exports = router;

