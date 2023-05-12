import { Router } from "express";

const router = Router();

// Tweet CRUD

// Create Tweet
router.post("/", (req, res) => {
  res.status(501).json({ error: "NotImplemented" });
});

//List Tweet
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

//Get Tweet
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// Update Tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

// delete Tweet
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not implemented: ${id}` });
});

export default router;
