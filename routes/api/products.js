var express=require('express')
const product =require('../../db').product;
var multer = require('multer');
var path = require('path');
var bodyParser = require('body-parser')
var upload = multer({ dest: __dirname + '/uploads' })

const route=require('express').Router()
var jsonParser = bodyParser.json()
//db.connect()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
route.use('/uploads', express.static('uploads'))
    //set views-
    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() +
                path.extname(file.originalname));
    
        }
    })
   // route.set('view engine', 'ejs');


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));

    }
})
route.get('/',(req,res)=>{
  res.render('index');
})

route.get('/',(req,res)=>{
    //get all products
    product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"could not retrieve products"            
        })
    })
}) 
route.post('/', urlencodedParser,(req,res)=>{
    //validate the values
 if(isNaN(req.body.price))
 {
returnres.status(403).send({
    error:"price is not valid number"
})
 }
    //add new products
    product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price),
       //since in post request everything will go as a string which  db wont be able to accept as price would be in int
   //price automatically turns into string when we send 51.00 min
        image:
          upload(req, res, function(err) {
            if (err) {
                console.log(err);
                res.render('index',{
                  msg:err
                });
                }
    
    
          else if(req.file==undefined){
              res.render('index',{
                msg:'No file selected'
              })
            }
    
    else if(req.file==undefined){
      res.render('index',{
        msg:'Please upload a file'
      })
    }
           else{
                ///save into database
                const newNote = {
                    filename: req.file.filename,
                    path: req.file.path
                }
                new Notes(newNote)
                    .save()
                    .then(data => {
                        console.log(data);
                        res.redirect('/')
                    }).catch((error) => {
                        console.log(error);
                    })
    
            }
       
    
        // exit node.js app
        res.json({'msg': 'File uploaded successfully!'})
        .catch((e)=>{
        console.log(e);
        res.json({'err': e});
           })

    //}/
     .then((product)=>{
         res.status(201).send(product)

     })
     .catch((error)=>{
         res.status(501).send({
             error:"ERROR adding product"
         })
     })
})
})
})
exports=module.exports=route