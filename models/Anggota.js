import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/databases.js';

const Anggota = sequelize.define('AnggotaModel', {
    id_anggota:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nama_anggota:{
        type: DataTypes.STRING,
        allowNull:false
    },
    jenis_kelamin:{
        type: DataTypes.ENUM('Laki-laki','Perempuan'),
        allowNull: false
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: true
    },
    no_telp:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tanggal_daftar:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    email:{
        type: DataTypes.STRING,
        allowNull:true
    },
    status_anggota:{
        type: DataTypes.ENUM('Aktif', 'Tidak Aktif'),
        allowNull:true,
        defaultValue:'Aktif'
    }
}, { 
    tableName:'anggota',
    timestamps:false
});

export default Anggota;