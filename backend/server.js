require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db.config");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", require("./routes/auth.route"));

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
