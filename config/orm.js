const connection = require("./connection.js");

const orm = {
	selectAll: function(tableInput, cb) {
		const queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(tableInput, burgerName, devoured, cb) {
		const data = { burger_name: burgerName, devoured: devoured };
		const queryString = "INSERT INTO ??  SET ?";
		connection.query(queryString, [tableInput, data], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(tableInput, burgerName, devoured, id, cb) {
		const queryString = "UPDATE ?? SET ? WHERE id = ?";
		const data = { burger_name: burgerName, devoured: devoured };
		connection.query(queryString, [tableInput, data, id], function(
			err,
			result
		) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;
