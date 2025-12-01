import Petugas from '../models/Petugas.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username & password wajib diisi" });
    }

    const petugas = await Petugas.findOne({ where: { username } });
    if (!petugas) {
      return res.status(404).json({ message: 'Username tidak ditemukan' });
    }

    const isMatch = await bcrypt.compare(password, petugas.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    const token = jwt.sign(
      { id: petugas.id_petugas, role: petugas.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    res.status(200).json({
      message: 'Login berhasil',
      user: {
        id_petugas: petugas.id_petugas,
        nama_petugas: petugas.nama_petugas,
        role: petugas.role,
      },
      token,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

export { login };
