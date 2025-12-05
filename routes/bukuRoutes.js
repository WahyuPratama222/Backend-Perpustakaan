import express from 'express';
import { deleteBuku, getAllBuku, getBukuById, patchBuku, postBuku, putBuku } from '../controllers/bukuController.js';

const router = express.Router();

router.post('/', postBuku);
router.get('/', getAllBuku);         
router.get('/:id', getBukuById); 
router.put('/:id', putBuku);   
router.patch('/:id', patchBuku);
router.delete('/:id', deleteBuku);  

export default router;
