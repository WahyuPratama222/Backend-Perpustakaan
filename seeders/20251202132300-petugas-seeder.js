const bcrypt = require('bcryptjs');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('petugas',[
      {
        nama_petugas: 'Mulyadi',
        username: 'MulyadiKeceeee',
        password: await bcrypt.hash('password123', 10),
        role:'Petugas'
      },
      {
        nama_petugas: 'Ani',
        username: 'AniAdmin',
        password: await bcrypt.hash('admin456', 10),
        role: 'Admin'
      },
      {
        nama_petugas: 'Budi',
        username: 'BudiPetugas',
        password: await bcrypt.hash('budi789', 10),
        role: 'Petugas'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('petugas', null, {})
  }
};
