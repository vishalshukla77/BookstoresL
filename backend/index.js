const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Routes
const bookRoutes = require("./src/books/book.route.js");
const OrderRoutes=require("./src/orders/order.route.js");
const AdminRoutes=require("./src/users/user.route.js");
const AdminStats=require("./src/stats/admin.stats.js");
app.use("/api/books", bookRoutes);
app.use("/api/orders",OrderRoutes);
app.use("/api/auth",AdminRoutes);
app.use("/api/admin",AdminStats);

// DB Connection
async function main() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
main();

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
