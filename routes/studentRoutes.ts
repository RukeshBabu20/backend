import express from "express";

const router = express.Router();

router.get("/create", () => {
  console.log("in");
});

export default router;
