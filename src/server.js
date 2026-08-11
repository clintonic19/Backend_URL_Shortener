const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const connectDB = require('./database/db')

const app = express();
const PORT = process.env.PORT || 5000;

//connect DB
connectDB();

app.use(cors());
app.use(express.json());

// Static frontend
app.use(express.static(path.join(__dirname, "frontend")));

//ROUTES
app.use("/api", require("./routes/Url.route"));




app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
//   console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});