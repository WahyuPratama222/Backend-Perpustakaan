import { deletePeminjamanService, getPeminjamanService, getPeminjamanByIdService, postPeminjamanService } from "../services/peminjamanService.js";

const postPeminjaman = async(req, res, next) => {
    try {
        const newPeminjaman = await postPeminjamanService(req.body);
        res.status(201).json(newPeminjaman);
    } catch (err) {
        next(err);
    };
};

const getAllPeminjaman = async (req, res, next) => {
    try {
        const allPeminjaman = await getPeminjamanService();
        res.status(200).json(allPeminjaman);
    } catch (err) {
        next(err);
    }
};

const getPeminjamanById = async (req, res, next) => {
    try {
        const peminjaman = await getPeminjamanByIdService(req.params.id);
        res.status(200).json(peminjaman);
    } catch (err) {
        next(err);
    }
};

const deletePeminjaman = async (req, res, next) => {
    try {
        const peminjaman = await deletePeminjamanService(req.params.id);
        res.status(200).json(peminjaman);
    } catch (err) {
        next(err);
    }
};

export { postPeminjaman, getAllPeminjaman, getPeminjamanById, deletePeminjaman }