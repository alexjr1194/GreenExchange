'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      user_name: 'John Doe',
      email: 'example@example.com',
      location: 'Novato',
      image: 'https://s3.aspiringsafety.com.au/wp-content/uploads/2015/10/photodune-235951s0-smiles-l-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
