const {DataTypes} = require('sequelize')

const thread = require('./database')

const userModel = thread.define("user",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.JSON,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

console.log('User Table is ok')

module.exports = userModel