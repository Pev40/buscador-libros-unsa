const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnection");

class EditorialesModel{
    async getAll(){
        const con = connectionDb.promise();
        const data = await con.query("SELECT * FROM proyectobaunsa.editoriales");
        return data[0];
    }

}
module.exports = EditorialesModel;