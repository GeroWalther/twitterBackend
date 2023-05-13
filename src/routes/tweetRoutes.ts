import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Tweet CRUD

// Create Tweet
router.post("/", async (req, res) => {
  const { content, image, userId } = req.body;
  console.log(content);

  try {
    const result = await prisma.tweet.create({
      data: {
        content,
        image,
        userId, // TODO managed based on the auth user
      },
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: `Tweet needs a content and userId` });
  }
});

//List Tweet
router.get("/", async (req, res) => {
  const allTweets = await prisma.tweet.findMany();
  res.json(allTweets);
});

//Get Tweet
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
  if (!tweet) {
    return res.status(404).json({ error: "Tweet not found" });
  }
  res.json(tweet);
});

// Update Tweet
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { content, image } = req.body;
  try {
    const result = await prisma.tweet.update({
      where: { id: Number(id) },
      data: { content, image },
    });
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: "Failed to update the tweet" });
  }
});

// delete Tweet
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
  if (!tweet) {
    return res.status(404).json({ error: "Tweet not found" });
  }

  await prisma.tweet.delete({ where: { id: Number(id) } });

  res
    .status(200)
    .json({ message: `Tweet with ID ${id} has been successfully deleted.` });
});

export default router;
