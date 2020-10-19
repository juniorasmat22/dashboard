const express=require('express');
const path=require('path');
const app=express();
const indexRoutes=require('./routers/index');

//setting
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
//middlewares

//routes
app.use(indexRoutes);
//static files
app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'),()=>{
    console.log("server on port",app.get('port'));
});