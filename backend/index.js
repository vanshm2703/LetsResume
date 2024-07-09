const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database");
const userRoutes = require("./routes/UserRouter");

const app = express();


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();


app.use("/users", userRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
