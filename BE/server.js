const { Pool } = require("pg");
const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Database Configuration
const pool = new Pool({
  user: "jtd", // Update with your DB user
  host: "localhost",
  database: "postgres", // Update if your DB name is different
  password: "jtd@123", // Update with your DB password
  port: 5432, // Default PostgreSQL port
});

// Create a "contacts" table if it doesn't already exist
(async () => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(createTableQuery);
    console.log("Table 'contacts' is ready.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
})();

// API Routes

// Save a contact message
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const insertQuery = `
      INSERT INTO contacts (name, email, message) 
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const result = await pool.query(insertQuery, [name, email, message]);
    console.log("Contact message saved:", result.rows[0]);

    res
      .status(201)
      .json({ message: "Your message has been sent successfully!" });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all contact messages (Optional: For admin use)
app.get("/api/contact", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC;"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
