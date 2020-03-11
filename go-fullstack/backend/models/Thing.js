const Sequelize = require('sequelize');
const sequelize = new Sequelize('database');

module.exports = sequelize.define("Thing",{
    title: { type: Sequelize.STRING(255), required: true },
    description: { type: Sequelize.STRING(255), required: true },
    imageUrl: { type: Sequelize.STRING(255), required: true },
    userId: { type: Sequelize.STRING(255), required: true },
    price: { type: Sequelize.INTEGER(), required: true },
});