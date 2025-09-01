const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // 1. Import the cors package
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");

const app = express();

// Enable CORS for all routes
app.use(cors()); // 2. Use the cors middleware

// Body parser middleware
app.use(express.json());

// Mount routers
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`🚀 Server running on port ${PORT}`));
