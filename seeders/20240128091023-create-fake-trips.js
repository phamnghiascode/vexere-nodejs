'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('trips', [

      {
        fromStation: 1,
        toStation: 2,
        startTime: '2024-02-02 07-30-00',
        price: 200000,
        createdAt: '2023-02-02 07-30-00',
        updatedAt: '2023-02-02 07-30-00'
      },
      {
        fromStation: 2,
        toStation: 1,
        startTime: '2024-02-02 07-30-00',
        price: 200000,
        createdAt: '2023-02-02 07-30-00',
        updatedAt: '2023-02-02 07-30-00'
      },
      {
        fromStation: 2,
        toStation: 3,
        startTime: '2024-02-02 07-30-00',
        price: 100000,
        createdAt: '2023-02-02 07-30-00',
        updatedAt: '2023-02-02 07-30-00'
      },
      {
        fromStation: 3,
        toStation: 2,
        startTime: '2024-02-02 07-30-00',
        price: 100000,
        createdAt: '2023-02-02 07-30-00',
        updatedAt: '2023-02-02 07-30-00'
      },
      {
        fromStation: 1,
        toStation: 4,
        startTime: '2024-02-02 07-30-00',
        price: 1000000,
        createdAt: '2023-02-02 07-30-00',
        updatedAt: '2023-02-02 07-30-00'
      },
      {
        fromStation: 3,
        toStation: 4,
        startTime: '2024-02-02 07-30-00',
        price: 800000,
        createdAt: '2023-02-02 07-30-00',
        updatedAt: '2023-02-02 07-30-00'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
