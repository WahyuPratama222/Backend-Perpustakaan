import Petugas from "../models/Petugas.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationError, notFoundError, authError } from "../utils/errors/errorsUtil.js";
import { loginAuthValidation } from "../validations/authValidation.js";

export const postAuthService = async (data) => {
    const authData = {
        username: data.username,
        password: data.password
    };

    // Validasi input
    const err = loginAuthValidation(authData);
    if (err) throw validationError(err);

    // Cari user di database
    const petugas = await Petugas.findOne({ where: { username: authData.username } });
    if (!petugas) throw notFoundError("Username tidak ditemukan");

    // Bandingkan password
    const isMatch = await bcrypt.compare(authData.password, petugas.password);
    if (!isMatch) throw authError("Password salah");

    // Generate JWT
    const token = jwt.sign(
        { id: petugas.id_petugas, role: petugas.role },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );

    return {
        user: {
            id_petugas: petugas.id_petugas,
            nama_petugas: petugas.nama_petugas,
            role: petugas.role
        },
        token,
        expiresIn: 900 
    };
};