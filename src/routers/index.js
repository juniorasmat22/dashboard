const { Router } = require('express');
const router = Router();
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('login/login.html',{titulo:'Analytics Dashboard'});
 });
 router.get('/registro',(req,res)=>{
   // res.sendFile(path.join(__dirname,'views/index.html'));
   res.render('login/registro.html',{titulo:'Registro'});
});
router.get('/home',(req,res)=>{
   // res.sendFile(path.join(__dirname,'views/index.html'));
   res.render('index.html',{titulo:'Home'});
});
 router.get('/buttons',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('buttons.html',{titulo:'buttons'});
 });
 module.exports = router;