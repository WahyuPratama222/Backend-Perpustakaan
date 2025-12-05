'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buku', {
      id_buku: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      judul_buku: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nama_penerbit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nama_penulis: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jumlah_halaman: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jumlah_buku: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('buku');
  }
};

