import { deleteAnggotaService, getAnggotaByIdService, getAnggotaService, patchAnggotaService, postAnggotaService, putAnggotaService } from '../services/anggotaService.js';

const postAnggota = async (req, res, next) => {
    try {
        const newAnggota = await postAnggotaService(req.body);
        res.status(201).json(newAnggota);
    } catch (err) {
        next(err);
    }
};

const getAllAnggota = async (req, res, next) => {
    try {
        const allAnggota = await getAnggotaService();
        res.status(200).json(allAnggota);
    } catch (err) {
        next(err);
    }
};

const getAnggotaById = async (req, res, next) => {
    try {
        const anggota = await getAnggotaByIdService(req.params.id);
        res.status(200).json(anggota);
    } catch (err) {
        next(err);
    }
};

const putAnggota = async (req, res, next) => {
    try {
        const data = { ...req.body, id: req.params.id };
        const updated = await putAnggotaService(data);
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

const patchAnggota = async (req, res, next) => {
    try {
        const data = { ...req.body, id: req.params.id };
        const updated = await patchAnggotaService(data);
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

const deleteAnggota = async (req, res, next) => {
    try {
        const anggota = await deleteAnggotaService(req.params.id);
        res.status(200).json(anggota);
    } catch (err) {
        next(err);
    }
};

export { postAnggota, getAllAnggota, getAnggotaById, putAnggota, patchAnggota, deleteAnggota };
