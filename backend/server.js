require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});