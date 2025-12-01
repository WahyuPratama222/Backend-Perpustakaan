import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/databases.js';

// Load semua model agar Sequelize mendaftarkan mereka
import './models/Anggota.js';
import './models/Buku.js';
import './models/Petugas.js';
import './models/Peminjaman.js';
import './models/Pengembalian.js';

// Load associations supaya relasi diterapkan SETELAH semua model terdaftar
import './models/associations.js';

// Routes
import anggotaRoutes from './routes/anggotaRoutes.js';
import bukuRoutes from './routes/bukuRoutes.js';
import petugasRoutes from './routes/petugasRoutes.js';
import peminjamanRoutes from './routes/peminjamanRoutes.js';
import pengembalianRoutes from './routes/pengembalianRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

// Daftar routes
app.use('/api/auth', authRoutes);
app.use('/api/anggota', anggotaRoutes);
app.use('/api/buku', bukuRoutes);
app.use('/api/petugas', petugasRoutes);
app.use('/api/peminjaman', peminjamanRoutes);
app.use('/api/pengembalian', pengembalianRoutes);

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));