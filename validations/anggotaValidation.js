import { validateId } from "../utils/validateIdUtil.js";
import { validateEmail } from "../utils/validateEmailUtil.js";
import { validateString, validateEnum } from "../utils/validateDataUtil.js";

const createValidateAnggota = (data) => {
    const { nama_anggota, jenis_kelamin, email } = data;

    // Nama anggota wajib
    let err = validateString(nama_anggota, "Nama anggota");
    if (err) return err;

    // Jenis kelamin wajib dan harus Laki-laki/Perempuan
    err = validateEnum(jenis_kelamin, "Jenis kelamin", ["Laki-laki", "Perempuan"]);
    if (err) return err;

    // Email opsional, kalau ada harus valid
    const emailErr = validateEmail(email, "Email", false);
    if (emailErr) return emailErr;

    return null;
};

const updateRequiredValidateAnggota = (data) => {
    const { nama_anggota, jenis_kelamin, email, status_anggota } = data;

    // Semua field wajib
    let err = validateString(nama_anggota, "Nama anggota");
    if (err) return err;

    err = validateEnum(jenis_kelamin, "Jenis kelamin", ["Laki-laki", "Perempuan"]);
    if (err) return err;


    const emailErr = validateEmail(email, "Email", false);
    if (emailErr) return emailErr;


    err = validateEnum(status_anggota, "Status Anggota", ["Aktif", "Tidak Aktif"]);
    if (err) return err;

    return null;
};

const updateOptionalValidateAnggota = (data) => {
    const { nama_anggota, jenis_kelamin, email, status_anggota } = data;

    // Nama anggota opsional
    let err = validateString(nama_anggota, "Nama anggota", false);
    if (err) return err;

    err = validateEnum(jenis_kelamin, "Jenis kelamin", ["Laki-laki", "Perempuan"], false);
    if (err) return err;

    const emailErr = validateEmail(email, "Email", false);
    if (emailErr) return emailErr;


    err = validateEnum(status_anggota, "Status Anggota", ["Aktif", "Tidak Aktif"], false);
    if (err) return err; 

    return null;
};

export { createValidateAnggota, updateRequiredValidateAnggota, updateOptionalValidateAnggota };

//Done jgn diubah lagi