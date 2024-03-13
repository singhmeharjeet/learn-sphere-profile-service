const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const setupInfoRoute = require("./routes/info");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to the Profile Service of Learn Sphere!",
	});
});

setupInfoRoute(app);

app.listen(PORT, () => {
	console.log(`Profile Service is running on port: ${PORT}`);
});
