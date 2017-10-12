var express = require("express");
var router = express.Router();

// Import the model (.js) to use its database functions.
var civilface = require("../models/civilface.js");

router.get("/", function(req, res){
// call function in models to pull data from mysql, get the newest entry, put it into infoObject, send to handlebarsjs
    // res.send("Hello");
    // res.render("index", infoObject)
    civilface.insertData("https://pbs.twimg.com/profile_images/889736688624312321/xVAFH9ZH_400x400.jpg", function(){
        res.send("Data saved to mysql");
    });
});



// POST method: get user input(the public image URL .jpg, .png) and send to KAIROS API, redirect to mainpage with displayed data
router.post("/", function(req, res){
    civilface.insertData("https://pbs.twimg.com/profile_images/889736688624312321/xVAFH9ZH_400x400.jpg", function(){
        res.send("Data saved to mysql");
    });
});



// POST method: allow user to upload image(.jpg, .png), encode and send to KAIROS API, redirect to mainpage with displayed data
// router.post("/upload", function(req, res){
// //use formidable package to handle data upload, then use base64Img to encode image, save into base64.txt
//     res.redirect("/");
// });


// Export routes for server.js to use.
module.exports = router;