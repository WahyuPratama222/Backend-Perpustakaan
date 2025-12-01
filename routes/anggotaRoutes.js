import express from 'express';
import { createAnggota, getAllAnggota, getAnggotaById,updateAnggota, deleteAnggota } from '../controllers/anggotaController.js';

const router = express.Router();

router.post('/anggota', createAnggota);
router.get('/anggota', getAllAnggota);
router.get('/anggota/:id', getAnggotaById);
router.put('/anggota/:id', updateAnggota);
router.delete('/anggota/:id', deleteAnggota);

export default router;