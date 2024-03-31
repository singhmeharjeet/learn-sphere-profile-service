//info.js
const { getAuth } = require("../middleware.js");

const { getProfile } = require("./db.js");
//get profile
module.exports = (app) =>
	app.get("/api/profile-service/info", getAuth, async (req, res) => {
		const response = await getProfile(res.locals.user.username);

		if (response.success === true) {
			return res.status(200).json({
				success: true,
				message: "Profile exists!",
				profile: response.user,
			});
		} else {
			return res.status(400).json({
				success: false,
				message: "Profile does not exist",
			});
		}
	});
