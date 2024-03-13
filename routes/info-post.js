const { getAuth } = require("../middleware.js");

const { createProfile } = require("./db.js");

module.exports = (app) =>
  app.post("/info", getAuth, async (req, res) => {
    // console.log("\ninfo endpoint hit", res.locals.user); // createUser(res.locals.user.username, profile_image)
    console.log(req.body);
    const response = await createProfile(res.locals.user.username, req.body.img); //doubt in where to get the image from
    if (response.success === true) {
      return res.json({ success: true, message: "Profile created!" });
    } else {
      return res.json({ success: false, message: "Profile not created" });
    }
  });
