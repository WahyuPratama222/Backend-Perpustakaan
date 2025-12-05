import { postPetugasService, getPetugasService, getPetugasByIdService, putPetugasService, patchPetugasService, deletePetugasService } from "../services/petugasService.js";


const postPetugas = async(req, res, next) => {
    try {
        const newPetugas = await postPetugasService(req.body);
        res.status(201).json(newPetugas);
    } catch (err) {
        next(err);
    };
};

const getAllPetugas = async (req, res, next) => {
    try {
        const allPetugas = await getPetugasService();
        res.status(200).json(allPetugas);
    } catch (err) {
        next(err);
    }
};

const getPetugasById = async (req, res, next) => {
    try {
        const petugas = await getPetugasByIdService(req.params.id);
        res.status(200).json(petugas);
    } catch (err) {
        next(err);
    }
};

const putPetugas = async (req, res, next) => {
    try {
        const data = { ...req.body, id: req.params.id };
        const updated = await putPetugasService(data);
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

const patchPetugas = async (req, res, next) => {
    try {
        const data = { ...req.body, id: req.params.id };
        const updated = await patchPetugasService(data);
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

const deletePetugas = async (req, res, next) => {
    try {
        const petugas = await deletePetugasService(req.params.id);
        res.status(200).json(petugas);
    } catch (err) {
        next(err);
    }
};

export { postPetugas, getAllPetugas, getPetugasById, putPetugas, patchPetugas, deletePetugas };