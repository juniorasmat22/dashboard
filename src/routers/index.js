const { Router } = require('express');
const router = Router();
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('login/login.html',{titulo:'Analytics Dashboard'});
 });
 router.get('/buttons',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('buttons.html',{titulo:'buttons'});
 });
 module.exports = router;