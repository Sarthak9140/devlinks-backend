const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./route/auth.route.js");

dotenv.config();
const app = express();

app.use(
  cors({
    origin:
      "https://devlinks-client-g1tt-e4we94v2g-sarthak9140s-projects.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log(" Server running on port 5000"));
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
