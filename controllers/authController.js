import { postAuthService } from "../services/authService.js";

export const loginController = async (req, res, next) => {
    try {
        const result = await postAuthService(req.body);
        res.status(200).json({ message: "Login berhasil", ...result });
    } catch (err) {
        next(err);
    }
};
