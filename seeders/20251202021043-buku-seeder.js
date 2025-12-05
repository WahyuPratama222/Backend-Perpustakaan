'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buku', [
      {
        judul_buku:'Gelak Sedih',
        nama_penerbit:'Gramedia',
        nama_penulis:'Eka Kurniawan',
        jumlah_halaman: 185,
        jumlah_buku: 1
      },
      {
        judul_buku:'86',
        nama_penerbit:'Gramedia',
        nama_penulis:'Okky Madasari',
        jumlah_halaman: 252,
        jumlah_buku: 4
      },
      {
        judul_buku:'O',
        nama_penerbit:'Gramedia',
        nama_penulis:'Eka Kurniawan',
        jumlah_halaman: 482,
        jumlah_buku: 2
      },
      {
        judul_buku:'Pendidikan Kaum Tertindas',
        nama_penerbit:'Narasi',
        nama_penulis:'Paulo Freire',
        jumlah_halaman: 220,
        jumlah_buku: 3
      },
      {
        judul_buku:'Jalan Bandungan',
        nama_penerbit:'Narasi',
        nama_penulis:'Nh. Dini',
        jumlah_halaman: 378,
        jumlah_buku: 2
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buku', null, {})
  }
};
