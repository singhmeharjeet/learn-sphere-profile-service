const express = require("express");
const app = express();
const setupInfoRoute = require("./routes/info");
const cors = require("cors");
const setupInfopostRoute = require("./routes/info-post");
const PORT = process.env.PORT || 8100;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to the Profile Service of Learn Sphere!",
	});
});

setupInfoRoute(app);
setupInfopostRoute(app);

app.listen(PORT, () => {
	console.log(`Profile Service is running on port: ${PORT}`);
});
