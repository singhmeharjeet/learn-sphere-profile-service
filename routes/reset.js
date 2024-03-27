// reset.js
const { getAuth } = require("../middleware.js");
const { deleteProfile, createProfile } = require("./db.js");

module.exports = (app) =>
  app.post("/reset", getAuth, async (req, res) => {
    try {
      const { userId, profileImg, biography } = req.body;
      const deleteResult = await deleteProfile(userId);

      if (deleteResult.success) {
        const createResult = await createProfile(userId, profileImg, biography);

        if (createResult.success) {
          console.log("Profile reset successfully");
          return res.status(200).json({
            success: true,
            message: "Profile reset successfully",
            user: createResult.user,
          });
        } else {
          return res.status(400).json({
            success: false,
            message: "Profile creation failed after deletion",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "Profile deletion failed",
        });
      }
    } catch (error) {
      console.error("Error resetting profile:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });
