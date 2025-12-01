import bcrypt from 'bcryptjs';
import Petugas from '../models/Petugas.js';

//POST

const createPetugas = async (req,res) =>{
    try{
        const {nama_petugas, username, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const petugasBaru = await Petugas.create({
            nama_petugas,
            username,
            password: hashedPassword,
            role
        });
    
        const { password: _, ...dataTanpaPassword } = petugasBaru.toJSON();

        res.status(201).json(dataTanpaPassword);
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

//GET (READ ALL)

const getAllPetugas = async (req,res) => {
    try{
        const semuaPetugas = await Petugas.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(semuaPetugas);
    } catch (error){
        res.status(500).json({message: error.message});    
    }
};

//GET (READ BY ID)

const getPetugasById = async (req,res) => {
    try{
        const { id } = req.params;
        const petugas = await Petugas.findByPk(id, {
            attributes: { exclude: ['password'] }
        });
        if(!petugas){
            return res.status(404).json({ message: "Petugas tidak ditemukan" });
        }

        res.status(200).json(petugas);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

//PUT (UPDATE BY ID)

const updatePetugas = async(req,res) => {
    try{
        const { id } = req.params;
        const {nama_petugas, username, password, role} = req.body;

        const petugas = await Petugas.findByPk(id);
        if (!petugas) {
            return res.status(404).json({ message: "Petugas tidak ditemukan" });
        }

    petugas.nama_petugas = nama_petugas || petugas.nama_petugas;
    petugas.username = username || petugas.username;
    petugas.role = role || petugas.role;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      petugas.password = hashedPassword;
    }
        await petugas.save();
        res.status(200).json(petugas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//DELETE (DELETE BY ID)

const deletePetugas = async(req,res) => {
    try{
        const { id } = req.params;
        const petugas = await Petugas.findByPk(id);

        if (!petugas) {
            return res.status(404).json({ message: "Petugas tidak ditemukan" });
        }

        await petugas.destroy();
        res.status(200).json({ message: "Petugas berhasil dihapus" });  
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export { createPetugas, getAllPetugas, getPetugasById, updatePetugas,deletePetugas };