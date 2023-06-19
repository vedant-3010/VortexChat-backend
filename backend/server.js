const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());

// api routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
