const fs = require('fs');
const path = require('path');

const samplesFilePath = path.join(__dirname, '../data/samplesDataBase.json');
const products = JSON.parse(fs.readFileSync(samplesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		res.render('index');
		// Do the magic
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
