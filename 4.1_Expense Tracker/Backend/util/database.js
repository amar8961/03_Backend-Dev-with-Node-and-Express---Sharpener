const Sequelize=require('sequelize')

const sequelize=new Sequelize('expense1', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports=sequelize