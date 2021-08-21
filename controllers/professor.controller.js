const express = require("express");
const router = express.Router();
const EditorialesModel = require("../models/editoriales.model.js");
const editorialDb = new EditorialesModel();
const UserModel = require ("../models/users.model.js");
const userDb = new UserModel();
class ProfessorController{
    async getAllLibros() {
        const result = editorialDb.getAll();
        const data = await result.catch((err)=>{
            console.log("Professor Error Controller",err);
            return null;
        })
        return data;
      }
    async logear(email, password){
        const result = userDb.login(email,password);
        const data = await result.catch((err)=>{
            console.log("Logear resultado: ",err);
            return null;
        })
        return data;
    }
}
module.exports = ProfessorController;