import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { errorHandler } from "./middleware/errorHandler";

import authRoutes from "./routes/authRoute";
import chatsRoutes from "./routes/chatRoute";
import messagesRoutes from "./routes/messageRoute";
import usersRoutes from "./routes/userRoute";

const app = express();

const allowedOrigins = [
  "http://localhost:8081", // expo mobile
  "http://localhost:5173", // vite web devs
  process.env.FRONTEND_URL!, // production
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // allow credentials from client (cookies, authorization headers, etc.)
  }),
);

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
