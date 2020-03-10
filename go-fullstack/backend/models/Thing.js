const Sequelize = require('sequelize');

module.exports = sequelize.define("Thing",{
    title: { type: Sequelize.STRING(255), required: true },
    description: { type: Sequelize.STRING(255), required: true },
    imageUrl: { type: Sequelize.STRING(255), required: true },
    userId: { type: Sequelize.STRING(255), required: true },
    price: { type: Sequelize.INT(), required: true },
});