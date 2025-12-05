import Buku from "../models/Buku.js";
import { badRequestError, notFoundError, validationError } from "../utils/errors/errorsUtil.js";
import { validateId } from "../utils/validateIdUtil.js";
import { createValidateBuku, updateOptionalValidateBuku, updateRequiredValidateBuku } from "../validations/bukuValidation.js";

const postBukuService = async (data) => {
    const bukuData = {
        judul_buku: data.judul_buku,
        nama_penerbit: data.nama_penerbit,
        nama_penulis: data.nama_penulis,
        jumlah_halaman: data.jumlah_halaman,
        jumlah_buku: data.jumlah_buku
    };

    const err = createValidateBuku(bukuData);
    if (err) throw validationError(err);

    return await Buku.create(bukuData);
};

const getBukuService = async () => {
    return await Buku.findAll();
};

const getBukuByIdService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const buku = await Buku.findByPk(id);
    if (!buku) throw notFoundError("Buku tidak ditemukan");

    return buku;
};

const putBukuService = async (data) => {
    const errId = validateId(data.id);
    if (errId) throw badRequestError(errId);

    const bukuData = {
        judul_buku: data.judul_buku,
        nama_penerbit: data.nama_penerbit,
        nama_penulis: data.nama_penulis,
        jumlah_halaman: data.jumlah_halaman,
        jumlah_buku: data.jumlah_buku
    };

    const errBody = updateRequiredValidateBuku(bukuData);
    if (errBody) throw validationError(errBody);

    const buku = await Buku.findByPk(data.id);
    if (!buku) throw notFoundError("Buku tidak ditemukan");

    await buku.update(bukuData);
    return buku;
};

const patchBukuService = async (data) => {
    const errId = validateId(data.id);
    if (errId) throw badRequestError(errId);

    const buku = await Buku.findByPk(data.id);
    if (!buku) throw notFoundError("Buku tidak ditemukan");

    const errBody = updateOptionalValidateBuku(data);
    if (errBody) throw validationError(errBody);

    const allowedFields = [
        "judul_buku",
        "nama_penerbit",
        "nama_penulis",
        "jumlah_halaman",
        "jumlah_buku"
    ];

    const updateFields = {};

    for (const field of allowedFields) {
        if (data[field] !== undefined) {
            updateFields[field] = data[field];
        }
    }

    if (Object.keys(updateFields).length === 0) {
        throw badRequestError("Tidak ada field yang diupdate");
    }

    await buku.update(updateFields);
    return buku;
};

const deleteBukuService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const buku = await Buku.findByPk(id);
    if (!buku) throw notFoundError("Buku tidak ditemukan");

    await buku.destroy();
    return buku;
};


export { postBukuService, getBukuService, getBukuByIdService, putBukuService, patchBukuService, deleteBukuService };
