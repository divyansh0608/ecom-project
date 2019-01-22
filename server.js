var express=require('express')

const path=require('path')
var app=express();
//global.__basedir = __dirname;
const db = require('/home/bond0608/Desktop/webdmycodes/project/db.js');
  

//const da =require('/home/bond0608/Desktop/webdmycodes/project/public/upload.router.js');
 
app.use(express.json())//post
app.use(express.urlencoded({extended:true}))//post
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)

app.listen(8888,()=>console.log('server started at http://localhost:8888'))

