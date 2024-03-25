const { getAuth } = require("../middleware.js");

const { createProfile } = require("./db.js");

module.exports = (app) =>
	app.post("/info", getAuth, async (req, res) => {
		const response = await createProfile(
			res.locals.user.username,
			req.body.img
		); //doubt in where to get the image from
		if (response.success === true) {
			return res.json({
				success: true,
				message: "Profile created!",
				user: response.user,
			});
		} else {
			return res.json({ success: false, message: "Profile not created" });
		}
	});
