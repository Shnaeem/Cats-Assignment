const Cat = require("../models/cat.js");

// get all cats
const getAllCats = async (req, res) => {
	try {
		const allCats = await Cat.find();
		return res.status(200).json({ allCats });
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

// get cat by id
const getCatByID = async (req, res) => {
	try {
		const { id } = req.params;
		const cat = await Cat.findById(id);
		return res.status(200).json({ cat });
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

// create a cat
const createCat = async (req, res) => {
	console.log(req.body);
	try {
		const cat = await new Cat(req.body);
		await cat.save();
		return res.status(200).send(cat);
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

// delete cat
const deleteCat = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedCat = await Cat.findByIdAndDelete(id);

		if (deletedCat) return res.status(200).send("Cat successfully deleted and chonked on.");

		throw new Error("Cat not found.");
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

// update a cat
const updateCat = async (req, res) => {
	try {
		const { id } = req.params;
		await Cat.findByIdAndUpdate(id, req.body, { new: true }, (err, cat) => {
			if (err) {
				res.status(500).send("There was an error :", err);
			}
			if (!cat) {
				res.status(500).send("No cat with that ID was found.");
			}
			return res.status(200).send(cat);
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

module.exports = {
	getAllCats,
	getCatByID,
	createCat,
	deleteCat,
	updateCat,
};