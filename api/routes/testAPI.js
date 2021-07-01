var express = require("express");
var router = express.Router(); 
router.get("/",(resq,res,next) => {
    res.send("Hello Brightroots this is my interview task");
});

module.exports=router;