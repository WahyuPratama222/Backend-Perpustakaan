import express from "express";
import {
  getAllAnggota,
  getAnggotaById,
  patchAnggota,
  deleteAnggota,
  postAnggota,
  putAnggota,
} from "../controllers/anggotaController.js";

const router = express.Router();

/**
 * @swagger
 * /api/anggota:
 *   post:
 *     summary: Membuat anggota baru
 *     tags: [Anggota]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_anggota
 *               - jenis_kelamin
 *             properties:
 *               nama_anggota:
 *                 type: string
 *                 example: Budi Santoso
 *               jenis_kelamin:
 *                 type: string
 *                 enum: [Laki-laki, Perempuan]
 *                 example: Laki-laki
 *               alamat:
 *                 type: string
 *                 example: Jl. Merdeka No. 123
 *               no_telp:
 *                 type: string
 *                 example: "081234567890"
 *               email:
 *                 type: string
 *                 example: budi@email.com
 *     responses:
 *       201:
 *         description: Anggota Berhasil Dibuat
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Anggota'
 *       400:
 *         description: Validasi Petugas Atau Permintaan Client Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", postAnggota);

/**
 * @swagger
 * /api/anggota:
 *   get:
 *     summary: Mengambil semua data anggota
 *     tags: [Anggota]
 *     responses:
 *       200:
 *         description: Semua Anggota Berhasil Diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Anggota'
 */
router.get("/", getAllAnggota);

/**
 * @swagger
 * /api/anggota/{id}:
 *   get:
 *     summary: Mengambil anggota berdasarkan ID
 *     tags: [Anggota]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID anggota
 *     responses:
 *       200:
 *         description: Anggota Berhasil Diambil
 *       400:
 *         description: Validasi Anggota Atau Permintaan Client Error
 *       404:
 *         description: Anggota Tidak Ditemukan
 */
router.get("/:id", getAnggotaById);

/**
 * @swagger
 * /api/anggota/{id}:
 *   put:
 *     summary: Update semua data anggota
 *     tags: [Anggota]
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
 *               - nama_anggota
 *               - jenis_kelamin
 *               - alamat
 *               - no_telp
 *               - email
 *               - status_anggota
 *             properties:
 *               nama_anggota:
 *                 type: string
 *               jenis_kelamin:
 *                 type: string
 *                 enum: [Laki-laki, Perempuan]
 *               alamat:
 *                 type: string
 *               no_telp:
 *                 type: string
 *               email:
 *                 type: string
 *               status_anggota:
 *                 type: string
 *                 enum: [Aktif, Tidak Aktif]
 *     responses:
 *       200:
 *         description: Anggota Berhasil Diupdate
 *       400:
 *         description: Validasi Anggota Atau Permintaan Client Error
 *       404:
 *         description: Anggota Tidak Ditemukan
 */
router.put("/:id", putAnggota);

/**
 * @swagger
 * /api/anggota/{id}:
 *   patch:
 *     summary: Update sebagian data anggota
 *     tags: [Anggota]
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
 *             properties:
 *               nama_anggota:
 *                 type: string
 *               jenis_kelamin:
 *                 type: string
 *                 enum: [Laki-laki, Perempuan]
 *               alamat:
 *                 type: string
 *               no_telp:
 *                 type: string
 *               email:
 *                 type: string
 *               status_anggota:
 *                 type: string
 *                 enum: [Aktif, Tidak Aktif]
 *     responses:
 *       200:
 *         description: Anggota Berhasil Diupdate
 *       400:
 *         description: Validasi Anggota Atau Permintaan Client Error
 *       404:
 *         description: Anggota Tidak Ditemukan
 */
router.patch("/:id", patchAnggota);

/**
 * @swagger
 * /api/anggota/{id}:
 *   delete:
 *     summary: Menghapus anggota
 *     tags: [Anggota]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Anggota Berhasil Dihapus
 *       400:
 *         description: Validasi Anggota Atau Permintaan Client Error
 *       404:
 *         description: Anggota Tidak Ditemukan
 */
router.delete("/:id", deleteAnggota);

export default router;
