import { getBukuService, postBukuService, getBukuByIdService, putBukuService, patchBukuService, deleteBukuService } from "../services/bukuService.js";

const postBuku = async(req, res, next) => {
    try {
        const newBuku = await postBukuService(req.body);
        res.status(201).json(newBuku);
    } catch (err) {
        next(err);
    };
};

const getAllBuku = async (req, res, next) => {
    try {
        const allBuku = await getBukuService();
        res.status(200).json(allBuku);
    } catch (err) {
        next(err);
    }
};

const getBukuById = async (req, res, next) => {
    try {
        const buku = await getBukuByIdService(req.params.id);
        res.status(200).json(buku);
    } catch (err) {
        next(err);
    }
};

const putBuku = async (req, res, next) => {
    try {
        const data = { ...req.body, id: req.params.id };
        const updated = await putBukuService(data);
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

const patchBuku = async (req, res, next) => {
    try {
        const data = { ...req.body, id: req.params.id };
        const updated = await patchBukuService(data);
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

const deleteBuku = async (req, res, next) => {
    try {
        const buku = await deleteBukuService(req.params.id);
        res.status(200).json(buku);
    } catch (err) {
        next(err);
    }
};

export { postBuku, getAllBuku, getBukuById, putBuku, patchBuku, deleteBuku };

