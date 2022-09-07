'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            Email: 'Admin@gmail.com',
            Password: '123456',
            FirstName: 'Nguyễn',
            LastName: 'Nhật Minh',
            PhoneUser: '0396764757',
            Address: 'Bình Dương',
            Gender: 1,
            ImageUser: 'sa',
            RoleId: 1,
            CreatedAt: new Date(),
            UpdatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {

    }
};