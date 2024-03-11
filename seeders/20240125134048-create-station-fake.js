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
    await queryInterface.bulkInsert('stations', [
      {
        name: 'Bến xe Mỹ Đình',
        address: "Mỹ Đình, Hà Nội",
        province: "Hà Nội",
        createdAt: "2024-1-25 07:46:06",
        updatedAt: "2024-1-25 08:46:06"
      },
      {
        name: 'Bến xe Giáp Bát',
        address: "Hoàng Mai, Hà Nội",
        province: "Hà Nội",
        createdAt: "2024-1-25 07:46:06",
        updatedAt: "2024-1-25 08:46:06"
      },
      {
        name: 'Bến xe Ninh Bình',
        address: "Thành phố Ninh Bình",
        province: "Ninh Bình",
        createdAt: "2024-1-25 07:46:06",
        updatedAt: "2024-1-25 08:46:06"
      },
      {
        name: 'Bến xe Miền Tây',
        address: "Bình Tân, Thành phố Hồ Chí Minh",
        province: "Thành phố Hồ Chí Min",
        createdAt: "2024-1-25 07:46:06",
        updatedAt: "2024-1-25 08:46:06"
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
    await queryInterface.bulkDelete('stations', null, {});
  }
};
