const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vanshm2703:mongo1234@projectdb.ondxn8h.mongodb.net/?retryWrites=true&w=majority&appName=ProjectDb",
      {
        useUnifiedTopology: true,
      },
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
