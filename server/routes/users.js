import express from "express";
import {
  getUser,
  getUserAssociates,
  addRemoveAssociate,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
// router.get("/:id/associates", verifyToken, getUserAssociates);

/* UPDATE */
// router.patch("/:id/:associateId", verifyToken, addRemoveAssociate);

export default router;