const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },  
});

// mysql table name should just be 'campaigns'
// also make sure data types are sane. Date should reflect mysql date type, same with budget (should be float) etc
// also add validations using sequelize validation property on model
const Campaign = sequelize.define('tbl_campaigns', {
    username: {
      type: Sequelize.STRING
      
    },
    title: {
      type: Sequelize.STRING
    },
    briefdescription: {
        type: Sequelize.STRING
    },
    fullbrief: {
        type: Sequelize.STRING
    },
    client: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    startdate: {
        type: Sequelize.STRING
    },
    enddate: {
        type: Sequelize.STRING
    }, 
    facebook: {
        type: Sequelize.STRING
    },
    instagram: {
        type: Sequelize.STRING
    },
    twitter: {
        type: Sequelize.STRING
    },
    tumblr: {
        type: Sequelize.STRING
    },
    merchantid: {
        type: Sequelize.STRING
    },
    imageurl: {
        type: Sequelize.STRING
    }
});
Campaign.sync(); 

module.exports = Campaign;

