// Global
const router = require("express").Router();

// Local
const db = require("../database");

// CRUD
router.route("/").get((req, res) => {
	db.Book.find(req.query)
		.sort({ title: 1 })
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});

router.route("/").post((req, res) => {
	db.Book.create(req.body)
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});

router.route("/:id").get((req, res) => {
	db.Book.findById(req.params.id)
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});

router.route("/:id").put((req, res) => {
	db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});

router.route("/:id").delete((req, res) => {
	db.Book.findById({ _id: req.params.id })
		.then((results) => results.remove())
		.then((results) => res.json(results))
		.catch((err) => res.status(422).json(err));
});

module.exports = router;
