import { validateCount } from "../utils/validateCountUtil.js";
import { validateId } from "../utils/validateIdUtil.js";
import { validateString } from "../utils/validateDataUtil.js";

const createValidateBuku = (data) => {
    const { judul_buku, nama_penerbit, nama_penulis, jumlah_halaman, jumlah_buku } = data;

    // Validasi string required
    const stringFields = [
        { value: judul_buku, name: "Judul buku" },
        { value: nama_penerbit, name: "Nama penerbit" },
        { value: nama_penulis, name: "Nama penulis" }
    ];

    for (const field of stringFields) {
        const err = validateString(field.value, field.name);
        if (err) return err;
    };

    // Validasi numeric
    const numericFields = [
        { value: jumlah_halaman, name: "Jumlah halaman" },
        { value: jumlah_buku, name: "Jumlah buku" }
    ];

    for (const field of numericFields) {
        const valCount = validateCount(field.value, field.name);
        if (valCount) return valCount;
    };

    return null;
};

const updateRequiredValidateBuku = (data) => {
    const { judul_buku, nama_penerbit, nama_penulis, jumlah_halaman, jumlah_buku } = data;

    const stringFields = [
        { value: judul_buku, name: "Judul buku" },
        { value: nama_penerbit, name: "Nama penerbit" },
        { value: nama_penulis, name: "Nama penulis" }
    ];

    for (const field of stringFields) {
        const err = validateString(field.value, field.name);
        if (err) return err;
    };

    const numericFields = [
        { value: jumlah_halaman, name: "Jumlah halaman" },
        { value: jumlah_buku, name: "Jumlah buku" }
    ];

    for (const field of numericFields) {
        const valCount = validateCount(field.value, field.name);
        if (valCount) return valCount;
    };

    return null;

};

const updateOptionalValidateBuku = (data) => {

    const { judul_buku, nama_penerbit, nama_penulis, jumlah_halaman, jumlah_buku } = data;

    const stringFields = [
        { value: judul_buku, name: "Judul buku" },
        { value: nama_penerbit, name: "Nama penerbit" },
        { value: nama_penulis, name: "Nama penulis" }
    ];

    for (const field of stringFields) {
        const err = validateString(field.value, field.name, false);
        if (err) return err;
    };

    const numericFields = [
        { value: jumlah_halaman, name: "Jumlah halaman" },
        { value: jumlah_buku, name: "Jumlah buku" }
    ];

    for (const field of numericFields) {
            const valCount = validateCount(field.value, field.name, false);
            if (valCount) return valCount;
    };

    return null;
};

export { createValidateBuku, updateRequiredValidateBuku, updateOptionalValidateBuku };
