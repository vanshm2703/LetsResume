const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database");
const userRoutes = require("./routes/UserRouter");

const app = express();

// Middleware
app.use(
  cors({
    origin:
      "https://06c9025e-6f17-452e-9a86-112ab0c650a7-00-yrcqkh4jxzfb.sisko.replit.dev:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use("/users", userRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
