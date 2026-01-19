import express from "express";
import { clerkMiddleware } from "@clerk/express";
import { errorHandler } from "./middleware/errorHandler";

import authRoutes from "./routes/authRoute";
import chatsRoutes from "./routes/chatRoute";
import messagesRoutes from "./routes/messageRoute";
import usersRoutes from "./routes/userRoute";

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and makes them available as req.body in your route handlers

app.use(clerkMiddleware)

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", usersRoutes);

app.use(errorHandler);

export default app;
