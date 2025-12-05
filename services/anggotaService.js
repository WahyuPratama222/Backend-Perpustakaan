import Anggota from "../models/Anggota.js";
import { badRequestError, notFoundError, validationError } from "../utils/errorsUtil.js";
import { validateId } from "../utils/validateIdUtil.js";
import { createValidateAnggota, updateOptionalValidateAnggota, updateRequiredValidateAnggota } from "../validations/anggotaValidation.js";

const postAnggotaService = async (data) => {
    const anggotaData = {
        nama_anggota: data.nama_anggota,
        jenis_kelamin: data.jenis_kelamin,
        alamat: data.alamat,
        no_telp: data.no_telp,
        email: data.email,
        status_anggota: data.status_anggota,
    };

    const err = createValidateAnggota(anggotaData);
    if (err) throw validationError(err);

    return await Anggota.create(anggotaData);
};

const getAnggotaService = async () => {
    return await Anggota.findAll();
};

const getAnggotaByIdService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const anggota = await Anggota.findByPk(id);
    if (!anggota) throw notFoundError("Anggota tidak ditemukan");

    return anggota;
};

const putAnggotaService = async (data) => {
    const errId = validateId(data.id);
    if (errId) throw badRequestError(errId);

    const anggotaData = {
        nama_anggota: data.nama_anggota,
        jenis_kelamin: data.jenis_kelamin,
        alamat: data.alamat,
        no_telp: data.no_telp,
        email: data.email,
        status_anggota: data.status_anggota,
    };

    const errBody = updateRequiredValidateAnggota(anggotaData);
    if (errBody) throw validationError(errBody);

    const anggota = await Anggota.findByPk(data.id);
    if (!anggota) throw notFoundError("Anggota tidak ditemukan");

    await anggota.update(anggotaData);

    return anggota;
};

const patchAnggotaService = async (data) => {
    const errId = validateId(data.id);
    if (errId) throw badRequestError(errId);

    const anggota = await Anggota.findByPk(data.id);
    if (!anggota) throw notFoundError("Anggota tidak ditemukan");

    const errBody = updateOptionalValidateAnggota(data);
    if (errBody) throw validationError(errBody);

    const updateFields = {};

    const allowedFields = [
        "nama_anggota",
        "jenis_kelamin",
        "alamat",
        "no_telp",
        "email",
        "status_anggota"
    ];

    for (const field of allowedFields) {
        if (data[field] !== undefined) {
            updateFields[field] = data[field];
        }
    }

    if (Object.keys(updateFields).length === 0) {
        throw badRequestError("Tidak ada field yang diupdate");
    }

    await anggota.update(updateFields);
    return anggota;
};

const deleteAnggotaService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const anggota = await Anggota.findByPk(id);
    if (!anggota) throw notFoundError("Anggota tidak ditemukan");

    await anggota.destroy();
    return anggota;
};


export { postAnggotaService, getAnggotaService, getAnggotaByIdService, putAnggotaService, patchAnggotaService, deleteAnggotaService };
