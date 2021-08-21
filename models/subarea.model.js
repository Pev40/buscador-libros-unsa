const express = require("express");
const router = express.Router();
const connectionDb = require("/config/dbconnection");

class SubareaModel{
    async getAll(){
        const con = connectionDb.promise();
        const data = await con.query("SELECT * FROM proyectobaunsa.subareas");
        return data[0];
    }

}
module.exports = SubareaModel;