//info.js
const { getAuth } = require("../middleware.js");

const { getProfile, createProfile } = require("./db.js");
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
			// Create a profile
			const profileRes = await createProfile(
				res.locals.user.username,
				res.locals.user.role,
			);

			if (profileRes.success === false) {
				return res.status(400).json({
					success: false,
					message: "Profile creation failed",
				});
			} else {
				return res.status(200).json({
					success: true,
					message: "New Profile Created!",
					profile: profileRes.user,
				});
			}
		}
	});
