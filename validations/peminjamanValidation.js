import { validateInt } from "../utils/validateDataUtil.js";

const createValidatePeminjaman = (data) => {
    const { id_buku, id_anggota, id_petugas } = data;

    const numericFields = [
        { value: id_buku, name: "Id Buku"},
        { value: id_anggota, name: "Id Anggota"},
        { value: id_petugas, name: "Id Petugas"}
    ];

    for (const field of numericFields){
        const err = validateInt (field.value, field.name)
        if (err) return err;
    };
    
    // Tidak perlu validasi status_pinjam (default DB)
    // Tidak perlu validasi tanggal (default / otomatis update)

    return null;
};

export { createValidatePeminjaman };