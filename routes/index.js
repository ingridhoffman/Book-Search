// Global
const path = require("path");
const router = require("express").Router();

//Local
const dbRoutes = require("./database");
const googleRoutes = require("./google");

// Routes
router.use("/db", dbRoutes);
router.use("/api", googleRoutes);
router.use((req, res) =>
	res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
