//info-id.js
const { getAuth } = require("../middleware.js");

const { getProfile } = require("./db.js");

module.exports = (app) =>
	app.get("/api/profile-service/info/:userId", getAuth, async (req, res) => {
		const userId = req.params.userId;

		const response = await getProfile(userId);

		if (response.success === true) {
			return res.status(200).json({
				success: true,
				message: "Profile exists!",
				profile: response.user,
			});
		} else {
			return res.status(404).json({
				success: false,
				message: "Profile not found",
			});
		}
	});
