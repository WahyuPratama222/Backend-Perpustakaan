import Pengembalian from "../models/Pengembalian.js";
import Peminjaman from "../models/Peminjaman.js";
import Buku from "../models/Buku.js";
import Petugas from "../models/Petugas.js";
import { createValidatePengembalian } from "../validations/pengembalianValidation.js";
import sequelize from "../config/databases.js";
import { validateId } from "../utils/validateIdUtil.js";
import { badRequestError, notFoundError, validationError } from "../utils/errorsUtil.js";

const postPengembalianService = async (data) => {
    const t = await sequelize.transaction();

    try {
        const err = createValidatePengembalian(data);
        if (err) throw validationError(err);

        const peminjaman = await Peminjaman.findByPk(data.id_peminjaman, {
            transaction: t,
            lock: t.LOCK.UPDATE
        });
        if (!peminjaman) throw notFoundError("Peminjaman tidak ditemukan");
        if (peminjaman.status_pinjam === "Dikembalikan") {
            throw badRequestError("Peminjaman ini sudah dikembalikan");
        }

        const petugas = await Petugas.findByPk(data.id_petugas, {
            transaction: t
        });
        if (!petugas) throw notFoundError("Petugas tidak ditemukan");

        const buku = await Buku.findByPk(peminjaman.id_buku, {
            transaction: t,
            lock: t.LOCK.UPDATE
        });
        if (!buku) throw notFoundError("Buku tidak ditemukan");

        const pengembalian = await Pengembalian.create(data, {
            transaction: t
        });

        if (data.status_buku === "Bagus") {
            await buku.increment("jumlah_buku", { by: 1, transaction: t });
        }

        await peminjaman.update({
            status_pinjam: "Dikembalikan",
            tanggal_pengembalian: new Date()
        }, { transaction: t });

        await t.commit();
        return pengembalian;

    } catch (err) {
        await t.rollback();
        throw err;
    }
};

const getPengembalianService = async () => {
    return await Pengembalian.findAll();
};

const getPengembalianByIdService = async (id) => {
    const errId = validateId(id);
    if (errId) throw badRequestError(errId);

    const buku = await Pengembalian.findByPk(id);
    if (!buku) throw notFoundError("Buku tidak ditemukan");

    return buku;
};


const deletePengembalianService = async (id) => {
    const err = validateId(id);
    if (err) throw badRequestError(err);

    const t = await sequelize.transaction();

    try {
        const pengembalian = await Pengembalian.findByPk(id, {
            transaction: t
        });
        if (!pengembalian) throw notFoundError("Pengembalian tidak ditemukan");

        const peminjaman = await Peminjaman.findByPk(
            pengembalian.id_peminjaman,
            {
                transaction: t,
                lock: t.LOCK.UPDATE
            }
        );

        const buku = await Buku.findByPk(peminjaman.id_buku, {
            transaction: t,
            lock: t.LOCK.UPDATE
        });

        if (pengembalian.status_buku === "Bagus") {
            await buku.decrement("jumlah_buku", { by: 1, transaction: t });
        }

        await peminjaman.update({
            status_pinjam: "Dipinjam",
            tanggal_pengembalian: null
        }, { transaction: t });

        await pengembalian.destroy({ transaction: t });

        await t.commit();
        return pengembalian;

    } catch (err) {
        await t.rollback();
        throw err;
    }
};


export { postPengembalianService, getPengembalianService, getPengembalianByIdService, deletePengembalianService };