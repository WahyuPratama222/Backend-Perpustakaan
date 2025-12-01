import express from 'express';
import { createBuku, getAllBuku, getBukuById, updateBuku, deleteBuku } from '../controllers/bukuController.js';

const router = express.Router();

router.post('/buku', createBuku);
router.get('/buku', getAllBuku);
router.get('/buku/:id', getBukuById);
router.put('/buku/:id', updateBuku);
router.delete('/buku/:id', deleteBuku);

export default router;