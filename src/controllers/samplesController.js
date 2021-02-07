const fs = require('fs');
const path = require('path');
//nlet db = require('../database/models');
//let sequelize = db.sequelize;
//const samplesFilePath = path.join(__dirname, '../data/samplesDataBase.json');
//const samples = JSON.parse(fs.readFileSync(samplesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		sequelize.query("SELECT * FROM Samples")
		.then(function(resultados){
			let samples = resultados [0];
			res.send(samples);
			//res.render("listadosamples",)

		})
		
		//res.render('samples');
	
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('samplescreate'); // Do the magic
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		let samplenuevo = {
			id: "",
			...req.body,
		}
		
		let samples = fs.readFileSync(path.join(__dirname, '..', 'data', 'samplesDataBase.json'),
		'utf-8');
		samples = JSON.parse(samples);
		samples = [...samples, samplenuevo];
		samples = JSON.stringify(samples, null, ' '); //pasar el array a texto, para guardarlo en jason
		
		fs.writeFileSync(path.join(__dirname,'..', 'data', 'samplesDataBase.json'), samples);
		
		res.redirect('/');
		
		
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;