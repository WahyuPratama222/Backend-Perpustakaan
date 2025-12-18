import express from "express";
import { loginController } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { getUserController } from "../controllers/getUserController.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login petugas/admin
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: MulyadiKeceeee
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login Berhasil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login berhasil
 *                 user:
 *                   type: object
 *                   properties:
 *                     id_petugas:
 *                       type: integer
 *                     nama_petugas:
 *                       type: string
 *                     role:
 *                       type: string
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 expiresIn:
 *                   type: integer
 *                   example: 900
 *       401:
 *         description: Password Salah
 *       404:
 *         description: Username Tidak Ditemukan
 */
router.post("/login", loginController);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get user info dari token
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token Valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Token Tidak Valid Atau Expired
 */
router.get("/me", verifyToken, getUserController);

export default router;
