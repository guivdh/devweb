const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    port: '3306',
});
const Thing = sequelize.define("Thing",{
    title: {type: Sequelize.STRING, required: true},
    description: {type: Sequelize.STRING, required: true},
    imageUrl: {type: Sequelize.STRING, required: true},
    userId: {type: Sequelize.STRING, required: true},
    price: {type: Sequelize.INTEGER, required: true},
},{
    timestamps: false,
});

sequelize.sync({
    force: false,
    logging: console.log
}).then(function () {

})

module.exports = Thing;