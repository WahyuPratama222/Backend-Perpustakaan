'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pengembalian', {
      id_pengembalian: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_peminjaman: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true, // sesuai model runtime
        references: {
          model: 'peminjaman',
          key: 'id_peminjaman'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'petugas',
          key: 'id_petugas'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status_buku: {
        type: Sequelize.ENUM('Bagus', 'Rusak', 'Hilang'),
        allowNull: false
      },
      tanggal_pengembalian: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pengembalian');
  }
};

