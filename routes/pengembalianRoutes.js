import express from 'express';
import { deletePengembalian, getAllPengembalian, getPengembalianById, postPengembalian } from '../controllers/pengembalianController.js';

const router = express.Router();

router.post('/', postPengembalian);
router.get('/', getAllPengembalian);         
router.get('/:id', getPengembalianById); 
router.delete('/:id', deletePengembalian);  

export default router;