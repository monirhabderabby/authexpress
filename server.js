const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Simple /login endpoint
app.post("/login", (req, res) => {
  const user = {
    email: "test@gmail.com",
    password: "123456",
  };
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  if (username === user["email"] && password === user["password"]) {
    return res
      .status(200)
      .json({ message: "Login successful!", token: "dummy-token" });
  } else {
    return res.status(401).json({ message: "Invalid username or password." });
  }
});

// Export the app wrapped in serverless-http
module.exports = app;
module.exports.handler = serverless(app);
