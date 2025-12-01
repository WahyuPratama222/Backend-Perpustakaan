import Buku from './Buku.js';
import Anggota from './Anggota.js';
import Petugas from './Petugas.js';
import Peminjaman from './Peminjaman.js';
import Pengembalian from './Pengembalian.js';

// Peminjaman → Buku
Buku.hasMany(Peminjaman, { foreignKey: 'id_buku' });
Peminjaman.belongsTo(Buku, { foreignKey: 'id_buku' });

// Peminjaman → Anggota
Anggota.hasMany(Peminjaman, { foreignKey: 'id_anggota' });
Peminjaman.belongsTo(Anggota, { foreignKey: 'id_anggota' });

// Peminjaman → Petugas
Petugas.hasMany(Peminjaman, { foreignKey: 'id_petugas' });
Peminjaman.belongsTo(Petugas, { foreignKey: 'id_petugas' });

// Pengembalian → Peminjaman
Peminjaman.hasOne(Pengembalian, { foreignKey: 'id_peminjaman' });
Pengembalian.belongsTo(Peminjaman, { foreignKey: 'id_peminjaman' });

// Pengembalian → Petugas
Petugas.hasMany(Pengembalian, { foreignKey: 'id_petugas' });
Pengembalian.belongsTo(Petugas, { foreignKey: 'id_petugas' });