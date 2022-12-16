const express = require("express");
const router = express.Router();
const {
  getAllLinks,
  getShortenLink,
  createShortenLink,
  deleteShortenLink,
  updateShortenLink,
} = require("../controllers/shortenLinkController");

router.get("/", getAllLinks);

router.get("/:id", getShortenLink);

router.post("/", createShortenLink);

router.patch("/:id", updateShortenLink);

router.delete("/:id", deleteShortenLink);

module.exports = router;
