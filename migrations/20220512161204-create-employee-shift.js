'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_shifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references : {
          model : 'Employees',
          key : 'id'
        }
      },
      shift_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references : {
          model : 'Shifts',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_shifts');
  }
};