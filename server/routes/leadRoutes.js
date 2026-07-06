const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authMiddleware");

const {
  getLeads,
  getLead,
  addLead,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

router.get("/", authenticate, getLeads);

router.get("/:id", getLead);

router.post("/", addLead);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

module.exports = router;