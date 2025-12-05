import bcrypt from "bcryptjs";
import Petugas from "../models/Petugas.js";
import { createValidatePetugas, updateRequiredValidatePetugas, updateOptionalValidatePetugas } from "../validations/petugasValidation.js";
import { validateId } from "../utils/validateIdUtil.js";
import { badRequestError, notFoundError, validationError } from "../utils/errors/errorsUtil.js";

const postPetugasService = async (data) => {
    const err = createValidatePetugas(data);
    if (err) throw validationError(err);

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const petugas = await Petugas.create({
        nama_petugas: data.nama_petugas,
        username: data.username,
        password: hashedPassword,
        role: data.role
    }).catch((e) => {
        if (e.name === "SequelizeUniqueConstraintError") {
            throw badRequestError("Username sudah digunakan");
        }
        throw e;
    });

    return petugas;
};

const getPetugasService = async () => {
    return await Petugas.findAll();
};

const getPetugasByIdService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const petugas = await Petugas.findByPk(id);
    if (!petugas) throw notFoundError("Petugas tidak ditemukan");

    return petugas;
};

const putPetugasService = async (data) => {
    const errId = validateId(data.id);
    if (errId) throw badRequestError(errId);

    const errBody = updateRequiredValidatePetugas(data);
    if (errBody) throw validationError(errBody);

    const petugas = await Petugas.findByPk(data.id);
    if (!petugas) throw notFoundError("Petugas tidak ditemukan");

    let hashedPassword = undefined;
    if (data.password) {
        hashedPassword = await bcrypt.hash(data.password, 10);
    }

    const updateData = {
        nama_petugas: data.nama_petugas,
        username: data.username,
        role: data.role
    };

    if (hashedPassword) updateData.password = hashedPassword;

    await petugas.update(updateData).catch((e) => {
        if (e.name === "SequelizeUniqueConstraintError") {
            throw badRequestError("Username sudah digunakan");
        }
        throw e;
    });

    return petugas;
};

const patchPetugasService = async (data) => {
    const errId = validateId(data.id);
    if (errId) throw badRequestError(errId);

    const petugas = await Petugas.findByPk(data.id);
    if (!petugas) throw notFoundError("Petugas tidak ditemukan");

    const errBody = updateOptionalValidatePetugas(data);
    if (errBody) throw validationError(errBody);

    const updateFields = {};

    if (data.nama_petugas !== undefined) updateFields.nama_petugas = data.nama_petugas;
    if (data.username !== undefined) updateFields.username = data.username;
    if (data.role !== undefined) updateFields.role = data.role;
    if (data.password !== undefined) {
        updateFields.password = await bcrypt.hash(data.password, 10);
    }

    if (Object.keys(updateFields).length === 0) {
        throw badRequestError("Tidak ada field yang diupdate");
    }

    await petugas.update(updateFields).catch((e) => {
        if (e.name === "SequelizeUniqueConstraintError") {
            throw badRequestError("Username sudah digunakan");
        }
        throw e;
    });

    return petugas;
};

const deletePetugasService = async (id) => {
    const err = validateId(id);
    if (err) throw badRequestError(err);

    const petugas = await Petugas.findByPk(id);
    if (!petugas) throw notFoundError("Petugas tidak ditemukan");

    await petugas.destroy();

    return petugas;
};


export { postPetugasService, getPetugasService, getPetugasByIdService, putPetugasService, patchPetugasService, deletePetugasService };
