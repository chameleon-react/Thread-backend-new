const {DataTypes} = require('sequelize')

const thread = require('./database')

const adminModel = thread.define('admin',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

console.log('admin Table is ok')

module.exports = adminModel