import { Router } from "express";

const router = Router();

// USER CRUD

// Create user
router.post("/", (req, res) => {
  res.status(501).json({ error: "NotImplemented" });
});

//List users
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

//Get users
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// Update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

export default router;
