const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Simple /login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  console.log(req.body);

  // Dummy login logic
  if (email === "test@gmail.com" && password === "123456") {
    return res
      .status(200)
      .json({ message: "Login successful!", token: "dummy-token" });
  } else {
    return res.status(401).json({ message: "Invalid username or password." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
