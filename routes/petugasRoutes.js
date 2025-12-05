import express from 'express';
import { deletePetugas, getAllPetugas, getPetugasById, patchPetugas, postPetugas, putPetugas } from '../controllers/petugasController.js';

const router = express.Router();

router.post('/', postPetugas);
router.get('/', getAllPetugas);         
router.get('/:id', getPetugasById); 
router.put('/:id', putPetugas);   
router.patch('/:id', patchPetugas);
router.delete('/:id', deletePetugas);  

export default router;