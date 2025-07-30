var express = require("express");
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const upload = multer();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Your app is listening on port " + port);
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
	const file = req.file;
	const fileName = file.originalname;
	const fileType = file.mimetype;
	const fileSize = file.size;

	const uploadRes = {
		name: fileName,
		type: fileType,
		size: fileSize,
	};
	res.json(uploadRes);
});
