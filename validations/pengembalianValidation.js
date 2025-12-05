import { validateInt, validateEnum } from "../utils/validateDataUtil.js";

const createValidatePengembalian = (data) => {
    const {id_peminjaman, id_petugas, status_buku} = data;

    const numericFields = [
        { value: id_peminjaman, name: "Id Peminjaman"},
        { value: id_petugas, name: "Id Petugas"}
    ];

    for (const field of numericFields){
        const err = validateInt (field.value, field.name)
        if (err) return err;
    };

    const err = validateEnum(status_buku, "Status Buku", ["Bagus", "Rusak", "Hilang"]);
    if (err) return err;    

    return null;
};

export { createValidatePengembalian };