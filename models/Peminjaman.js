import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/databases.js';

const Peminjaman = sequelize.define('PeminjamanModel', {
    id_peminjaman:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    id_buku:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    id_anggota:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    id_petugas:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    tanggal_peminjaman:{
        type: DataTypes.DATEONLY,
        allowNull:false,
        defaultValue:Sequelize.NOW
    },
    status_pinjam:{
        type: DataTypes.ENUM('Dipinjam' , 'Dikembalikan'),
        allowNull:true,
        defaultValue: 'Dipinjam'
    },
    tanggal_pengembalian:{
        type:DataTypes.DATEONLY,
        allowNull:true
    }

}, {
    tableName:'peminjaman',
    timestamps:false
})

export default Peminjaman;