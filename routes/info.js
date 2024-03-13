const { getAuth } = require("../middleware.js");

const { getUser } = require("./db.js");

module.exports = (app) =>
	app.get("/info", getAuth, async (req, res) => {
		console.log("\ninfo endpoint hit");
		return res.json({
			message: "Welcome to the Info endpoint of Learn Sphere!!!!",
		});
	});
