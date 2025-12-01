import Pengembalian from '../models/Pengembalian.js';
import Peminjaman from '../models/Peminjaman.js';
import Buku from '../models/Buku.js';
import Anggota from '../models/Anggota.js';
import Petugas from '../models/Petugas.js';

//POST
const createPengembalian = async (req, res) => {
  try {
    const { id_peminjaman, status_buku } = req.body;

    const pengembalianBaru = await Pengembalian.create({
      id_peminjaman,
      status_buku
    });

    res.status(201).json({
      message: 'Data pengembalian berhasil disimpan.',
      data: pengembalianBaru
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET (READ ALL)

const getAllPengembalian = async (req, res) => {
  try {
    const pengembalian = await Pengembalian.findAll({
      include: [
        {
          model: Peminjaman,
          include: [
            { model: Buku, attributes: ['judul_buku'] },
            { model: Anggota, attributes: ['nama_anggota'] }
          ]
        },
        { model: Petugas, attributes: ['nama_petugas'] }
      ]
    });

    res.status(200).json(pengembalian);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET (READ BY ID)

const getPengembalianById = async (req, res) => {
  try {
    const { id } = req.params;

    const pengembalian = await Pengembalian.findByPk(id, {
      include: [
        {
          model: Peminjaman,
          include: [
            { model: Buku, attributes: ['judul_buku'] },
            { model: Anggota, attributes: ['nama_anggota'] }
          ]
        },
        { model: Petugas, attributes: ['nama_petugas'] }
      ]
    });

    if (!pengembalian) {
      return res.status(404).json({ message: "Data pengembalian tidak ditemukan." });
    }

    res.status(200).json(pengembalian);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE

const deletePengembalian = async (req, res) => {
  try {
    const { id } = req.params;
    const pengembalian = await Pengembalian.findByPk(id);

    if (!pengembalian) {
      return res.status(404).json({ message: "Data pengembalian tidak ditemukan." });
    }

    await pengembalian.destroy();
    res.status(200).json({ message: "Data pengembalian berhasil dihapus." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createPengembalian, getAllPengembalian, getPengembalianById, deletePengembalian };