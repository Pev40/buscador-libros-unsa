const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnection");

class LibrosModel {
  async getAll() {
    const con = connectionDb.promise();
    const data = await con.query("SELECT * FROM proyectobaunsa.subareas");
    return data[0];
  }

  async findforEditorialAndArea(IdEditorial, IdArea) {
    const con = connectionDb.promise();
    const data = await con.query(
      "SELECT * FROM proyectobaunsa.libros INNER JOIN proyectobaunsa.areas ON proyectobaunsa.libros.ID_Area = areas.ID_Area INNER JOIN proyectobaunsa.editoriales ON proyectobaunsa.libros.ID_Editorial =editoriales.ID_Editorial WHERE (libros.ID_Editorial = ?) AND (libros.ID_Area = ?)",
      [IdEditorial, IdArea]
    );
    return data[0];
  }

  async create(IdEditorial, Nombre, ISBNC, Autor, NumEdicion, IdArea, SubArea) {
    const con = connectionDb.promise();
    const data = await con.query(
      "insert into proyectobaunsa.libros(ID_Editorial,Nombre,ISBNC,Autor,NumeroEditorial,ID_Area,Subarea) values (?,?,?,?,?,?,?)",
      [IdEditorial, Nombre, ISBNC, Autor, NumEdicion, IdArea, SubArea]
    );
    return data[0];
  }
}
module.exports = LibrosModel;