import { DataTypes } from 'sequelize';
import sequelize from '../config/databases.js';

const Buku = sequelize.define('BukuModel', {
    id_buku:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    judul_buku:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nama_penerbit:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nama_penulis:{
        type:DataTypes.STRING,
        allowNull:false
    },
    jumlah_halaman:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{min:0}
    },
    jumlah_buku:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{min:0}
    }
}, {
    tableName:'buku',
    timestamps:false
})


export default Buku;