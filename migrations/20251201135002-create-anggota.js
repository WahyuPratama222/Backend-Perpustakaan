'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('anggota', {
      id_anggota: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_anggota: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jenis_kelamin: {
        type: Sequelize.ENUM('Laki-laki', 'Perempuan'),
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true
      },
      no_telp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tanggal_daftar: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_anggota: {
        type: Sequelize.ENUM('Aktif', 'Tidak Aktif'),
        allowNull: true,
        defaultValue: 'Aktif'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('anggota');
  }
};
