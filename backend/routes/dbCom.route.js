import express from "express"
import {sendCode} from "../controllers/sendCode.js"
import { getCode } from "../controllers/getCode.js";

const router = express.Router();

router.post("/save/:roomId",sendCode);

router.get("/get/:roomId",getCode)

export default router;