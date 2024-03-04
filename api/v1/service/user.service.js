const mysql=require("mysql")
const dbconfig=require("../../config/database")
const User =require("../models/user.model")
const hashsaltrounds=10
const bcrypt = require('bcrypt');
const pool=mysql.createPool(dbconfig);

// async function createuser(user_id,username,password)
// {
//     const encry=await bcrypt.hash(password,hashsaltrounds);
//     return User.create({user_id,username, password:encry})
// }

exports.createuser=(user_id,username,password)=>{
    return new Promise((resolve,reject)=>{
        pool.query("INSERT INTO users (user_id,username, password) VALUES (?,?,?)",[user_id,username,password],
        (err,result)=>{
            if(err){
                // console.log(err);
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

exports.updateuser=(user_id,username,password)=>{
    return new Promise((resolve,reject)=>{
        pool.query("UPDATE users SET username=?,password=? WHERE user_id=?",[username,password,user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
}

exports.getuser=(user_id)=>{
    return new Promise((resolve,reject)=>{
        pool.query("SELECT *FROM users WHERE user_id=?",[user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
}

exports.deleteuser=(user_id)=>{
    return new Promise((resolve,reject)=>{
        pool.query("DELETE FROM users WHERE user_id=?",[user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
}

// module.exports={
//     createuser
// }