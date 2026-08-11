
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Database connected: ${conn.connection.name}`);

    // Handle disconnection events after initial connection
    conn.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });

    conn.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected. Attempting to reconnect...");
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


