import Peminjaman from '../models/Peminjaman.js';
import Buku from '../models/Buku.js';
import Anggota from '../models/Anggota.js';
import Petugas from '../models/Petugas.js';

// POST 

const createPeminjaman = async (req,res) => {
  try {
    const { id_buku, id_anggota, id_petugas } = req.body;
    const peminjamanBaru = await Peminjaman.create({
      id_buku,
      id_anggota,
      id_petugas,
      status_pinjam: 'Dipinjam'
    });
    res.status(201).json(peminjamanBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET (READ ALL)

const getAllPeminjaman = async (req,res) => {
  try {
    const semuaPeminjaman = await Peminjaman.findAll({
      include: [
        { model: Buku, attributes: ['judul_buku'] },
        { model: Anggota, attributes: ['nama_anggota'] },
        { model: Petugas, attributes: ['nama_petugas'] }
      ]
    });
    res.status(200).json(semuaPeminjaman);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET (READ BY ID)

const getPeminjamanById = async (req,res) => {
  try {
    const { id } = req.params;
    const peminjaman = await Peminjaman.findByPk(id, {
      include: [
        { model: Buku, attributes: ['judul_buku'] },
        { model: Anggota, attributes: ['nama_anggota'] },
        { model: Petugas, attributes: ['nama_petugas'] }
      ]
    });

    if (!peminjaman) {
      return res.status(404).json({ message: "Peminjaman tidak ditemukan" });
    }

    res.status(200).json(peminjaman);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deletePeminjaman = async (req, res) => {
  try {
    const { id } = req.params;
    const peminjaman = await Peminjaman.findByPk(id);
    if (!peminjaman) {
      return res.status(404).json({ message: "Peminjaman tidak ditemukan" });
    }

    await peminjaman.destroy();
    res.status(200).json({ message: "Peminjaman berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createPeminjaman, getAllPeminjaman, getPeminjamanById, deletePeminjaman };
