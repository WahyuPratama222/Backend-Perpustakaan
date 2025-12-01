import express from 'express';
import { createPengembalian, getAllPengembalian, getPengembalianById, deletePengembalian } from '../controllers/pengembalianController.js';

const router = express.Router();

router.post('/pengembalian', createPengembalian);
router.get('/pengembalian', getAllPengembalian);
router.get('/pengembalian/:id', getPengembalianById);
router.delete('/pengembalian/:id', deletePengembalian);

export default router;