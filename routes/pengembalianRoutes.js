import express from "express";
import {
  deletePengembalian,
  getAllPengembalian,
  getPengembalianById,
  postPengembalian,
} from "../controllers/pengembalianController.js";

const router = express.Router();

/**
 * @swagger
 * /api/pengembalian:
 *   post:
 *     summary: Membuat pengembalian buku
 *     tags: [Pengembalian]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_peminjaman
 *               - id_petugas
 *               - status_buku
 *             properties:
 *               id_peminjaman:
 *                 type: integer
 *                 example: 1
 *               id_petugas:
 *                 type: integer
 *                 example: 1
 *               status_buku:
 *                 type: string
 *                 enum: [Bagus, Rusak, Hilang]
 *                 example: Bagus
 *                 description: Jika Bagus, stok buku akan bertambah
 *     responses:
 *       201:
 *         description: Pengembalian Berhasil Dibuat
 *       400:
 *         description: Validasi Pengembalian Atau Permintaan Client Error
 *       404:
 *         description: ID Tidak Ditemukan
 */
router.post("/", postPengembalian);

/**
 * @swagger
 * /api/pengembalian:
 *   get:
 *     summary: Mengambil semua data pengembalian
 *     tags: [Pengembalian]
 *     responses:
 *       200:
 *         description: Semua Peminjaman Berhasil Diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pengembalian'
 */
router.get("/", getAllPengembalian);

/**
 * @swagger
 * /api/pengembalian/{id}:
 *   get:
 *     summary: Mengambil pengembalian berdasarkan ID
 *     tags: [Pengembalian]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pengembalian Berhasil Diambil
 *       400:
 *         description: Validasi Pengembalian Atau Permintaan Client Error
 *       404:
 *         description: Pengembalian Tidak Ditemukan
 */
router.get("/:id", getPengembalianById);

/**
 * @swagger
 * /api/pengembalian/{id}:
 *   delete:
 *     summary: Menghapus pengembalian (rollback status peminjaman)
 *     tags: [Pengembalian]
 *     description: Menghapus data pengembalian dan mengembalikan status peminjaman ke Dipinjam. Jika status_buku Bagus, stok akan dikurangi kembali.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pengembalian Berhasil Dihapus
 *       400:
 *         description: Validasi Pengembalian Atau Permintaan Client Error
 *       404:
 *         description: Pengembalian Tidak Ditemukan
 */
router.delete("/:id", deletePengembalian);

export default router;
