//info-post.js
const { getAuth } = require("../middleware.js");

const { createProfile } = require("./db.js");
//create profile
module.exports = (app) =>
	app.post("/api/profile-service/info", getAuth, async (req, res) => {
		const response = await createProfile(
			res.locals.user.username, res.locals.user.role
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
