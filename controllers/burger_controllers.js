const burger = require("../models/burger");
const express = require("express");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
	burger.all(data => {
		const object = {
			burgers: data
		};
		console.log(object);
		res.render("index", object);
	});
});

router.post("/api/burgers", (req, res) => {
	const burgerName = req.body.burgerName;
	const devoured = req.body.devoured;
	console.log("hit route");
	// console.log(burgerName, devoured);
	// console.log(req.body);
	burger.create(burgerName, devoured, result => {
		// Send back the ID of the new quote
		res.json({
			id: result.id,
			burger_name: result.burger_name,
			devoured: result.devoured
		});
	});
});

router.put("/api/burgers/:id", function(req, res) {
	const id = req.params.id;
	const burgerName = req.body.burgerName;
	const devoured = req.body.devoured;

	burger.update(burgerName, devoured, id, result => {
		if (result.changedRows === 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		}
		res.status(200).end();
	});
});

module.exports = router;
