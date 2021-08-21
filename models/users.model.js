const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnection");

class UsersModel{
    async login(email, password){
        const con = connectionDb.promise();
        const data = await con.query("SELECT * FROM proyectobaunsa.users WHERE Email = ?", [
            email,
          ]);
          if(tools.compareHash(password,data[0][0].Password)){
            return { status: "ok", id: data[0][0].ID_User};
          }
          return { status: "error"};
    }
}
module.exports = UsersModel;