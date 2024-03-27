// all.js
const { getAuth } = require("../middleware.js");
const { getAllProfiles } = require("./db.js");

module.exports = (app) => {
    app.get("/all", getAuth, async (req, res) => {
        const response = await getAllProfiles();
        if (response.success === true) {
            return res.json({
                success: true,
                message: "All profiles retrieved successfully",
                profiles: response.profiles,
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "Failed to retrieve profiles",
            });
        }
    });
};
