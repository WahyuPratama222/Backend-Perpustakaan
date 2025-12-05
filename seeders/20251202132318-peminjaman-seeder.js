'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('peminjaman',[
      {
        id_buku: 1,
        id_anggota: 1,
        id_petugas: 1,
        tanggal_peminjaman: new Date(),
        status_pinjam:'Dipinjam',
        tanggal_pengembalian: new Date ()
      },
      {
        id_buku: 2,
        id_anggota: 2,
        id_petugas: 1,
        tanggal_peminjaman: new Date(),
        status_pinjam: 'Dipinjam',
        tanggal_pengembalian: null
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('peminjaman', null, {}) 
  }
};
