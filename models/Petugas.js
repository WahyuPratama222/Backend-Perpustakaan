import { DataTypes } from 'sequelize';
import sequelize from '../config/databases.js';

const Petugas = sequelize.define('PetugasModel', {
    id_petugas:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nama_petugas:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    role:{
        type: DataTypes.ENUM('Admin', 'Petugas'),
        allowNull:false,
        defaultValue:'Petugas'
    }

}, {
    tableName:'petugas',
    timestamps:false
});

export default Petugas;