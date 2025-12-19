import express from "express"
import { login, Register ,logout} from "../controllers/user.js"
import cors from "cors";
const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;