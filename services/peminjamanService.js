import Peminjaman from "../models/Peminjaman.js";
import Buku from "../models/Buku.js";
import Anggota from "../models/Anggota.js";
import Petugas from "../models/Petugas.js";
import sequelize from "../config/databases.js";
import { createValidatePeminjaman } from "../validations/peminjamanValidation.js";
import { validateId } from "../utils/validateIdUtil.js";
import { badRequestError, notFoundError, validationError } from "../utils/errors/errorsUtil.js";

const postPeminjamanService = async (data) => {
    const t = await sequelize.transaction();

    try {
        // Validasi cepat
        const err = createValidatePeminjaman(data);
        if (err) throw validationError(err);

        // Lock row buku
        const buku = await Buku.findByPk(data.id_buku, {
            transaction: t,
            lock: t.LOCK.UPDATE
        });
        if (!buku) throw notFoundError("Buku tidak ditemukan");
        if (buku.jumlah_buku <= 0) throw badRequestError("Stok buku habis");

        const anggota = await Anggota.findByPk(data.id_anggota, { transaction: t });
        if (!anggota) throw notFoundError("Anggota tidak ditemukan");

        const petugas = await Petugas.findByPk(data.id_petugas, { transaction: t });
        if (!petugas) throw notFoundError("Petugas tidak ditemukan");

        // Kurangi stok
        await buku.update(
            { jumlah_buku: buku.jumlah_buku - 1 },
            { transaction: t }
        );

        // Buat peminjaman
        const peminjaman = await Peminjaman.create(data, { transaction: t });

        await t.commit();
        return peminjaman;

    } catch (err) {
        await t.rollback();
        throw err;
    }
};

const getPeminjamanService = async () => {
    return await Peminjaman.findAll();
};

const getPeminjamanByIdService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const buku = await Peminjaman.findByPk(id);
    if (!buku) throw notFoundError("Buku tidak ditemukan");

    return buku;
};

const deletePeminjamanService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const t = await sequelize.transaction();

    try {
        const peminjaman = await Peminjaman.findByPk(id, {
            transaction: t
        });
        if (!peminjaman) throw notFoundError("Peminjaman tidak ditemukan");

        const buku = await Buku.findByPk(peminjaman.id_buku, {
            transaction: t,
            lock: t.LOCK.UPDATE
        });
        if (!buku) throw notFoundError("Buku tidak ditemukan saat delete");

        // Naikkan stok
        await buku.update(
            { jumlah_buku: buku.jumlah_buku + 1 },
            { transaction: t }
        );

        // Hapus peminjaman
        await peminjaman.destroy({ transaction: t });

        await t.commit();
        return peminjaman;

    } catch (err) {
        await t.rollback();
        throw err;
    }
};


export { postPeminjamanService, getPeminjamanService, getPeminjamanByIdService, deletePeminjamanService };