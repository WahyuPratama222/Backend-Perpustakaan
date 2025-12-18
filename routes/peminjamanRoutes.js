import express from "express";
import {
  deletePeminjaman,
  getAllPeminjaman,
  getPeminjamanById,
  postPeminjaman,
} from "../controllers/peminjamanController.js";

const router = express.Router();

/**
 * @swagger
 * /api/peminjaman:
 *   post:
 *     summary: Membuat peminjaman baru
 *     tags: [Peminjaman]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_buku
 *               - id_anggota
 *               - id_petugas
 *             properties:
 *               id_buku:
 *                 type: integer
 *                 example: 1
 *               id_anggota:
 *                 type: integer
 *                 example: 1
 *               id_petugas:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Peminjaman Berhasil Dibuat
 *       400:
 *         description: Validasi Peminjaman Atau Permintaan Client Error
 *       404:
 *         description: ID Tidak Ditemukan
 */
router.post("/", postPeminjaman);

/**
 * @swagger
 * /api/peminjaman:
 *   get:
 *     summary: Mengambil semua data peminjaman
 *     tags: [Peminjaman]
 *     responses:
 *       200:
 *         description: Semua Peminjaman Berhasil Diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Peminjaman'
 */
router.get("/", getAllPeminjaman);

/**
 * @swagger
 * /api/peminjaman/{id}:
 *   get:
 *     summary: Mengambil peminjaman berdasarkan ID
 *     tags: [Peminjaman]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Peminjaman Berhasil Diambil
 *       400:
 *         description: Validasi Peminjaman Atau Permintaan Client Error
 *       404:
 *         description: Peminjaman Tidak Ditemukan
 */
router.get("/:id", getPeminjamanById);

/**
 * @swagger
 * /api/peminjaman/{id}:
 *   delete:
 *     summary: Menghapus peminjaman (stok buku dikembalikan)
 *     tags: [Peminjaman]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Peminjaman Berhasil Diambil
 *       400:
 *         description: Validasi Peminjaman Atau Permintaan Client Error
 *       404:
 *         description: Peminjaman Tidak Ditemukan
 */
router.delete("/:id", deletePeminjaman);

export default router;
