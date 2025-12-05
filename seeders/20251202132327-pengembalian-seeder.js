'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pengembalian',[
      {
        id_peminjaman: 1,
        id_petugas: 1,
        status_buku: 'Bagus',
        tanggal_pengembalian: new Date ()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pengembalian', null, {}) 
  }
};
