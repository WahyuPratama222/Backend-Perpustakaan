import express from 'express';
import { createPeminjaman, getAllPeminjaman, getPeminjamanById, deletePeminjaman } from '../controllers/peminjamanController.js';

const router = express.Router();

router.post('/peminjaman', createPeminjaman);
router.get('/peminjaman', getAllPeminjaman);
router.get('/peminjaman/:id', getPeminjamanById);
router.delete('/peminjaman/:id', deletePeminjaman);

export default router;