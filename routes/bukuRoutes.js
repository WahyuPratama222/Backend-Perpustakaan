import express from "express";
import {
  deleteBuku,
  getAllBuku,
  getBukuById,
  patchBuku,
  postBuku,
  putBuku,
} from "../controllers/bukuController.js";

const router = express.Router();

/**
 * @swagger
 * /api/buku:
 *   post:
 *     summary: Membuat buku baru
 *     tags: [Buku]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - judul_buku
 *               - nama_penerbit
 *               - nama_penulis
 *               - jumlah_halaman
 *               - jumlah_buku
 *             properties:
 *               judul_buku:
 *                 type: string
 *                 example: Laskar Pelangi
 *               nama_penerbit:
 *                 type: string
 *                 example: Gramedia
 *               nama_penulis:
 *                 type: string
 *                 example: Andrea Hirata
 *               jumlah_halaman:
 *                 type: integer
 *                 minimum: 1
 *                 example: 529
 *               jumlah_buku:
 *                 type: integer
 *                 minimum: 1
 *                 example: 10
 *     responses:
 *       201:
 *         description: Buku Berhasil Dibuat
 *       400:
 *         description: Validasi Buku Atau Permintaan Client Error
 */
router.post("/", postBuku);

/**
 * @swagger
 * /api/buku:
 *   get:
 *     summary: Mengambil semua data buku
 *     tags: [Buku]
 *     responses:
 *       200:
 *         description: Semua Buku Berhasil Diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Buku'
 */
router.get("/", getAllBuku);

/**
 * @swagger
 * /api/buku/{id}:
 *   get:
 *     summary: Mengambil buku berdasarkan ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buku Berhasil Diambil
 *       400:
 *         description: Validasi Buku Atau Permintaan Client Error
 *       404:
 *         description: Buku Tidak Ditemukan
 */
router.get("/:id", getBukuById);

/**
 * @swagger
 * /api/buku/{id}:
 *   put:
 *     summary: Update semua data buku
 *     tags: [Buku]
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
 *               - judul_buku
 *               - nama_penerbit
 *               - nama_penulis
 *               - jumlah_halaman
 *               - jumlah_buku
 *             properties:
 *               judul_buku:
 *                 type: string
 *               nama_penerbit:
 *                 type: string
 *               nama_penulis:
 *                 type: string
 *               jumlah_halaman:
 *                 type: integer
 *               jumlah_buku:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Buku Berhasil Diambil
 *       400:
 *         description: Validasi Buku Atau Permintaan Client Error
 *       404:
 *         description: Buku Tidak Ditemukan
 */
router.put("/:id", putBuku);

/**
 * @swagger
 * /api/buku/{id}:
 *   patch:
 *     summary: Update sebagian data buku
 *     tags: [Buku]
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
 *               judul_buku:
 *                 type: string
 *               nama_penerbit:
 *                 type: string
 *               nama_penulis:
 *                 type: string
 *               jumlah_halaman:
 *                 type: integer
 *               jumlah_buku:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Buku Berhasil Diambil
 *       400:
 *         description: Validasi Buku Atau Permintaan Client Error
 *       404:
 *         description: Buku Tidak Ditemukan
 */
router.patch("/:id", patchBuku);

/**
 * @swagger
 * /api/buku/{id}:
 *   delete:
 *     summary: Menghapus buku
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buku Berhasil Diambil
 *       400:
 *         description: Validasi Buku Atau Permintaan Client Error
 *       404:
 *         description: Buku Tidak Ditemukan
 */
router.delete("/:id", deleteBuku);

export default router;
