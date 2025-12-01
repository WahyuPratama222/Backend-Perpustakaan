import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/databases.js';

const Pengembalian = sequelize.define('PengembalianModel', {
    id_pengembalian:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false      
    },
    id_peminjaman:{
        type: DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    id_petugas:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    status_buku:{
        type: DataTypes.ENUM('Bagus', 'Rusak', 'Hilang'),
        allowNull:false
    },
    tanggal_pengembalian:{
        type: DataTypes.DATEONLY,
        allowNull:false,
        defaultValue: Sequelize.NOW
    }

}, {
    tableName:'pengembalian',
    timestamps:false
})

export default Pengembalian;