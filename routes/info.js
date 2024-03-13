const { getAuth } = require("../middleware.js");

const { getProfile, createProfile } = require("./db.js");

module.exports = (app) =>
  app.get("/info", getAuth, async (req, res) => {
    // getUser(res.locals.user.username)
    console.log("-----------------------------------------------------");
    const response = await getProfile(res.locals.user.username);
    if (response.success === true) {
      return res.json({ success: true, message: "Profile exists!" });
    } else {
      return res.json({ success: false, message: "Profile does not exist" });
    }
  });
