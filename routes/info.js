const { getAuth } = require("../middleware.js");

const { getProfile, createProfile } = require("./db.js");

module.exports = (app) =>
	app.get("/info", getAuth, async (req, res) => {
		const response = await getProfile(res.locals.user.username);
		if (response.success === true) {
			return res.json({
				success: true,
				message: "Profile exists!",
				user: response.user,
			});
		} else {
			// Create a profile
			const profileRes = await createProfile(
				res.locals.user.username,
				null
			);

			if (profileRes.success === false) {
				return res.status(400).json({
					success: false,
					message: "Profile creation failed",
				});
			} else {
				return res.json({
					success: true,
					message: "New Profile Created!",
					user: profileRes.user,
				});
			}
		}
	});
