const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connection = require("./utils/db/database");

const port = 5000;
require("dotenv").config();

connection(); // database call
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
