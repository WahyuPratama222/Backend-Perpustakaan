import express from 'express';
import { deletePeminjaman, getAllPeminjaman, getPeminjamanById, postPeminjaman } from '../controllers/peminjamanController.js';

const router = express.Router();

router.post('/', postPeminjaman);
router.get('/', getAllPeminjaman);         
router.get('/:id', getPeminjamanById); 
router.delete('/:id', deletePeminjaman);  

export default router;