const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    checkScam,
    getHistory,
    getStats
} = require("../controllers/scamController");


router.post(
    "/check",
    authMiddleware,
    checkScam
);


router.get(
    "/history",
    authMiddleware,
    getHistory
);

router.get(
    "/stats",
    authMiddleware,
    getStats
);

module.exports = router;