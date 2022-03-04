const fs = require('fs');
const path = require('path');
let db = require ('../../models');
let sequelize = db.sequelize;
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
	store: function (req,res) {
		db.samples.create ({
			name: req.body.name,
			autor: req.body.autor,

		});
		res.redirect("/samples");
		
		
		
		
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