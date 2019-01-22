//npm init, npm i express, npm i sequilize,npm i mysql2
const sequelize=require('sequelize')
const express=require('express')

const db=new sequelize('ecom1','shopper1','shoppass1',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    } 
})

const user=db.define('users',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    }
})
const product =db.define('products',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    manufacturer:sequelize.STRING,
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    },
  /*  image:{
        type: sequelize.BLOB('long')   
  }*/
});
db.sync()
   .then(()=>console.log("Database has been synced"))
   .catch((err)=>console.log("ERROR creating database"))
exports=module.exports={
    user,product
}
