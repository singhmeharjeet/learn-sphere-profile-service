// edit.js
const { getAuth } = require("../middleware.js");
const { editProfile, getProfile } = require("./db.js");

module.exports = (app) =>
	app.put("/api/profile-service/edit", getAuth, async (req, res) => {
		try {
			const { username, role } = res.locals.user;
			const { newProfileData } = req.body;
			

			if(username !== newProfileData.userId && role !== "admin"){
				return res.status(403).json({
					success: false,
					message: "Unauthorized to edit this profile",
				});
			}
			if(username === newProfileData.userId){
				newProfileData.role = role;
			}
			const editResult = await editProfile(
				newProfileData.userId,
				newProfileData
			);

			if (editResult.success) {
				console.log("Profile update", newProfileData);
				return res.status(200).json({
					success: true,
					message: "Profile updated successfully",
					profile: editResult
				});
			} else {
				return res.status(400).json({
					success: false,
					message: "Profile update failed",
				});
			}
			
		} catch (error) {
			console.error("Error editing profile:", error);
			return res.status(500).json({
				success: false,
				message: "Internal Server Error",
			});
		}
	});
