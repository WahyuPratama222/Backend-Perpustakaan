import express from 'express';
import { getAllAnggota, getAnggotaById, patchAnggota, deleteAnggota, postAnggota, putAnggota } from '../controllers/anggotaController.js';

const router = express.Router();

router.post('/', postAnggota);
router.get('/', getAllAnggota);         
router.get('/:id', getAnggotaById); 
router.put('/:id', putAnggota);   
router.patch('/:id', patchAnggota);
router.delete('/:id', deleteAnggota);  

export default router;