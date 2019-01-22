function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
   $.get('/home/bond0608/Desktop/webdmycodes/project/routes/api/products.js/notes',function(req,res){
  Notes.find().sort({date:-1}).exec(function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('notes',{data:data});
    }
  })
})
}

function addProduct (name, manuf, price,image, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price,
        image:upload.single(image)

    }, function (data) {
        done(data)
    }) 
}

function createProductCard (product) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
                <b>Rs. ${product.price}</b>
            </div>
            <div class="product-image">${product.image}</div>    
            <button class="col btn btn-primary m-3">Buy</button> 
        </div>
    </div>`
        )
}	/*var file = req.files.uploaded_image;
var img_name=file.name;

   if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                         
      file.mv('public/images/upload_images/'+file.name, function(err) {
                     
          if (err)

            return res.status(500).send(err);
                  var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";

                    var query = db.query(sql, function(err, result) {
                         res.redirect('profile/'+result.insertId);
                    });
               });
  } else {
    message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
    res.render('index.ejs',{message: message}); */