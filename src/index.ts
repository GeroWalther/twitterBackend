import express from "express";
import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import authRoutes from "./routes/authRoutes";
import { authenticateToken } from "./middlewares/authMiddleware";

const app = express();
app.use(express.json());
app.use("/user", authenticateToken, userRoutes);
app.use("/tweet", authenticateToken, tweetRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>hello world! 🪁</h1>");
});

app.listen(3000, () => {
  console.log("Sever ready at localhost:3000 🪁");
});
