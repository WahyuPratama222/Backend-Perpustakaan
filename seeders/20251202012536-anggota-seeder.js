'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('anggota', [
      {
        nama_anggota:'Wahyu',
        jenis_kelamin:'Laki-Laki',
        alamat:'JL Sukro 01',
        no_telp:'08236232123',
        tanggal_daftar: new Date(),
        email:'wahyu@gmail.com',
        status_anggota:'Aktif'
      },
      {
        nama_anggota:'Reza Arah',
        jenis_kelamin:'Laki-Laki',
        alamat:'JL Sukro 02',
        no_telp:'08231321232',
        tanggal_daftar:new Date(),
        email:'arahreza@gmail.com',
        status_anggota:'Aktif'
      },
      {
        nama_anggota:'Sherla',
        jenis_kelamin:'Perempuan',
        alamat:'JL Sukro 03',
        no_telp:'08289992929',
        tanggal_daftar:new Date(),
        email:'sherla@gmail.com',
        status_anggota:'Tidak Aktif'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('anggota', null, {});
  }
};
