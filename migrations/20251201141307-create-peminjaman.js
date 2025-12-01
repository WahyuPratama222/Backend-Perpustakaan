'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peminjaman', {
      id_peminjaman: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_buku: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'buku',   // tabel target
          key: 'id_buku'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_anggota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'anggota',
          key: 'id_anggota'
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
      tanggal_pinjam: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('peminjaman');
  }
};
