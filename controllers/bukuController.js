import Buku from '../models/Buku.js';

//POST

const createBuku = async (req, res) => {
    try{
        const {judul_buku, nama_penulis, nama_penerbit, jumlah_halaman, jumlah_buku} = req.body;
        const bukuBaru = await Buku.create({
            judul_buku,
            nama_penulis,
            nama_penerbit,
            jumlah_halaman,
            jumlah_buku,
        });
        res.status(201).json(bukuBaru);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//GET (READ ALL)

const getAllBuku = async (req, res) => {
  try {
    const semuaBuku = await Buku.findAll();
    res.status(200).json(semuaBuku);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//GET (READ BY ID)

const getBukuById = async (req, res) => {
  try {
    const { id } = req.params; // ambil id dari URL
    const buku = await Buku.findByPk(id);

    if (!buku) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    res.status(200).json(buku);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//PUT (UPDATE BY ID)

const updateBuku = async (req, res) => {
  try {
    const { id } = req.params;
    const { judul_buku, nama_penulis, nama_penerbit, jumlah_halaman, jumlah_buku } = req.body;

    const buku = await Buku.findByPk(id);
    if (!buku) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    buku.judul_buku = judul_buku || buku.judul_buku;
    buku.nama_penulis = nama_penulis || buku.nama_penulis;
    buku.nama_penerbit = nama_penerbit || buku.nama_penerbit;
    buku.jumlah_halaman = jumlah_halaman || buku.jumlah_halaman;
    buku.jumlah_buku = jumlah_buku || buku.jumlah_buku;

    await buku.save();
    res.status(200).json(buku);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE (DELETE BY ID)

const deleteBuku = async (req, res) => {
  try {
    const { id } = req.params;
    const buku = await Buku.findByPk(id);

    if (!buku) {
      return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    await buku.destroy();
    res.status(200).json({ message: "Buku berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBuku, getAllBuku, getBukuById, updateBuku, deleteBuku};

