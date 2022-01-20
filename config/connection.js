// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//Create connection to our database, pass in you MySQL information for username and PW
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Theprotigy15!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
