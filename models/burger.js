const db = require("../config/orm");

//orm.insertOne("burgers", "Test Burger", false);
//orm.updateOne("burgers", "New Test Burger", true, 6);
//orm.selectAll("burgers");

const burger = {
	all: cb => {
		db.selectAll("burgers", res => {
			cb(res);
		});
	},
	// The variables cols and vals are arrays.
	create: (burgerName, devoured, cb) => {
		db.insertOne("burgers", burgerName, devoured, res => {
			cb(res);
		});
	},
	update: (burgerName, devoured, id, cb) => {
		db.updateOne("burgers", burgerName, devoured, id, res => {
			cb(res);
		});
	}
};

module.exports = burger;
