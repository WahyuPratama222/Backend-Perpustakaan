import express from "express";
import {
  deletePetugas,
  getAllPetugas,
  getPetugasById,
  patchPetugas,
  postPetugas,
  putPetugas,
} from "../controllers/petugasController.js";

const router = express.Router();

/**
 * @swagger
 * /api/petugas:
 *   post:
 *     summary: Membuat petugas baru
 *     tags: [Petugas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_petugas
 *               - username
 *               - password
 *               - role
 *             properties:
 *               nama_petugas:
 *                 type: string
 *                 example: Siti Nurhaliza
 *               username:
 *                 type: string
 *                 example: siti.admin
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *               role:
 *                 type: string
 *                 enum: [Admin, Petugas]
 *                 example: Petugas
 *     responses:
 *       201:
 *         description: Petugas Berhasil Dibuat
 *       400:
 *         description: Validasi Petugas Atau Permintaan Client Error
 */
router.post("/", postPetugas);

/**
 * @swagger
 * /api/petugas:
 *   get:
 *     summary: Mengambil semua data petugas
 *     tags: [Petugas]
 *     responses:
 *       200:
 *         description: Semua Petugas Berhasil Diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Petugas'
 */
router.get("/", getAllPetugas);

/**
 * @swagger
 * /api/petugas/{id}:
 *   get:
 *     summary: Mengambil petugas berdasarkan ID
 *     tags: [Petugas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Petugas Berhasil Diambil
 *       400:
 *         description: Validasi Petugas Atau Permintaan Client Error
 *       404:
 *         description: Petugas Tidak Ditemukan
 */
router.get("/:id", getPetugasById);

/**
 * @swagger
 * /api/petugas/{id}:
 *   put:
 *     summary: Update semua data petugas
 *     tags: [Petugas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_petugas
 *               - username
 *               - password
 *               - role
 *             properties:
 *               nama_petugas:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [Admin, Petugas]
 *     responses:
 *       200:
 *         description: Petugas Berhasil Diupdate
 *       400:
 *         description: Validasi Petugas Atau Permintaan Client Error
 *       404:
 *         description: Petugas Tidak Ditemukan
 */
router.put("/:id", putPetugas);

/**
 * @swagger
 * /api/petugas/{id}:
 *   patch:
 *     summary: Update sebagian data petugas
 *     tags: [Petugas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_petugas:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Petugas Berhasil Diupdate
 *       400:
 *         description: Validasi Petugas Atau Permintaan Client Error
 *       404:
 *         description: Petugas Tidak Ditemukan
 */
router.patch("/:id", patchPetugas);

/**
 * @swagger
 * /api/petugas/{id}:
 *   delete:
 *     summary: Menghapus petugas
 *     tags: [Petugas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Petugas Berhasil Dihapus
 *       400:
 *         description: Validasi Petugas Atau Permintaan Client Error
 *       404:
 *         description: Petugas Tidak Ditemukan
 */
router.delete("/:id", deletePetugas);

export default router;
