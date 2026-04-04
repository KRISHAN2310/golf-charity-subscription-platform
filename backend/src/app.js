const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("API Running...");
});

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/score", require("./routes/scoreRoutes"));
app.use("/api/charity", require("./routes/charityRoutes"));
app.use("/api/draw", require("./routes/drawRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
module.exports = app;