import express from 'express';
import { createPetugas, getAllPetugas, getPetugasById, updatePetugas, deletePetugas } from '../controllers/petugasController.js';

const router = express.Router();

router.post('/petugas', createPetugas);
router.get('/petugas', getAllPetugas);
router.get('/petugas/:id', getPetugasById);
router.put('/petugas/:id', updatePetugas);
router.delete('/petugas/:id', deletePetugas);

export default router;