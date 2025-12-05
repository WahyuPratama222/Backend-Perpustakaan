import jwt from "jsonwebtoken";
import { authError } from "../utils/errors/errorsUtil.js";

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
    if (!token) return next(authError("Token dibutuhkan"));

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        next(authError("Token tidak valid atau sudah expired"));
    }
};