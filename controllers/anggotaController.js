import Anggota from '../models/Anggota.js';

//POST
const createAnggota = async (req,res) => {
    try{
        const {nama_anggota, jenis_kelamin, alamat, no_telp, email, status_anggota} = req.body;
        const anggotaBaru = await Anggota.create({
           nama_anggota,
           jenis_kelamin,
           alamat,
           no_telp,
           email,
           status_anggota 
        });
        res.status(201).json(anggotaBaru);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

};

//GET (READ ALL)
const getAllAnggota = async (req,res) => {
    try{
        const semuaAnggota = await Anggota.findAll();
        res.status(200).json(semuaAnggota);
    } catch (error){
        res.status(500).json({message: error.message})
    }
};


//GET (READ BY ID)

const getAnggotaById = async (req,res) => {
    try{
        const { id } = req.params;
        const anggota = await Anggota.findByPk(id);

        if (!anggota) {
            return res.status(404).json({ message: "Anggota tidak ditemukan" });
        }

        res.status(200).json(anggota);
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

//PUT (UPDDATE BY ID)

const updateAnggota = async (req,res) => {
    try{
        const { id } = req.params;
        const {nama_anggota, jenis_kelamin, alamat, no_telp, email, status_anggota} = req.body;
        
        const anggota = await Anggota.findByPk(id);
        if (!anggota) {
            return res.status(404).json({ message: "Anggota tidak ditemukan" });
        }

        anggota.nama_anggota = nama_anggota || anggota.nama_anggota;
        anggota.jenis_kelamin = jenis_kelamin || anggota.jenis_kelamin;
        anggota.alamat = alamat || anggota.alamat;
        anggota.no_telp = no_telp || anggota.no_telp;
        anggota.email = email || anggota.email;
        anggota.status_anggota = status_anggota || anggota.status_anggota;

        await anggota.save();
        res.status(200).json(anggota);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//DELETE (DELETE BY ID)

const deleteAnggota = async (req,res) => {
    try {
        const { id } = req.params;
        const anggota = await Anggota.findByPk(id);

        if (!anggota) {
            return res.status(404).json({ message: "Anggota tidak ditemukan" });
        }

        await anggota.destroy();
        res.status(200).json({message: "Anggota berhasil dihapus"});
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

export { createAnggota, getAllAnggota, getAnggotaById, updateAnggota, deleteAnggota};