import { postPengembalianService, getPengembalianService, getPengembalianByIdService, deletePengembalianService } from "../services/pengembalianService.js";

const postPengembalian = async(req, res, next) => {
    try {
        const newPengembalian = await postPengembalianService(req.body);
        res.status(201).json(newPengembalian);
    } catch (err) {
        next(err);
    };
};

const getAllPengembalian = async (req, res, next) => {
    try {
        const allPengembalian = await getPengembalianService();
        res.status(200).json(allPengembalian);
    } catch (err) {
        next(err);
    }
};

const getPengembalianById = async (req, res, next) => {
    try {
        const pengembalian = await getPengembalianByIdService(req.params.id);
        res.status(200).json(pengembalian);
    } catch (err) {
        next(err);
    }
};

const deletePengembalian = async (req, res, next) => {
    try {
        const pengembalian = await deletePengembalianService(req.params.id);
        res.status(200).json(pengembalian);
    } catch (err) {
        next(err);
    }
};

export { postPengembalian, getAllPengembalian, getPengembalianById, deletePengembalian };