import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// USER CRUD

// Create user
router.post("/", async (req, res) => {
  const { email, name, username } = req.body;

  try {
    const result = await prisma.user.create({
      data: {
        email,
        name,
        username,
        bio: "Hi I am new on Twitter",
      },
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: `Username and email should be unique` });
  }
});

//List users
router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

//Get 1 user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { tweets: true },
  });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// Update user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { bio, name, image } = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: { bio, name, image },
    });
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: "Failed to update the user" });
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });

  if (!user) {
    return res.status(404).json({ error: "Tweet not found" });
  }

  await prisma.user.delete({ where: { id: Number(id) } });

  res
    .status(200)
    .json({ message: `User with ID ${id} has been successfully deleted.` });
});

export default router;
