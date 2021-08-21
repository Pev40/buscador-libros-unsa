var express = require('express');
var router = express.Router();
const ProfessorController = require("../controllers/professor.controller");
const professorDb = new ProfessorController();
/* GET home page. */

router.get('/',async function(req, res, next) {
  res.render('pantallainicio', { title: 'Buscador UNSA' });
});

router.get('/nosotros',async function(req,res){
  res.render('our',{title: 'Nosotros'});
});

router.get('/contacto',async function(req,res){
  res.render('contact',{title: 'Contacto'});
});

router.get('/login',async function(req,res){
  res.render('login',{title: "Login"});
});

router.get('/panel',async function(req,res){
  res.render('panel',{title: "Panel"});
});

router.get('/logincheked',async function (req,res) {
  console.log("Hola");
  const professor = await professorDb.logear(req.body.email,req.body.password);
  console.log(professor);
  if (professor.status == "ok") {
    res.cookie("tokenUser", professor.id, { httpOnly: true });
    res.redirect("/panel");
  } else {
    res.redirect("/login");
  }
});



/***
 * POST
 */

module.exports = router;
