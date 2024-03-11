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
    await queryInterface.bulkInsert('users', [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: '123456',
        phoneNumber: '123456',
        avatar: '',
        type: 'admin',
        createdAt: "2024-1-25 07:46:06",
        updatedAt: "2024-1-25 08:46:06"
      },
      {
        name: "Client",
        email: "client@gmail.com",
        password: '123456',
        phoneNumber: '123456',
        avatar: '',
        type: 'client',
        createdAt: "2024-1-25 07:46:06",
        updatedAt: "2024-1-25 08:46:06"
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
