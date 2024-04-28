const multer = require('multer')
const path = require('path')
const photoStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null , path.join(__dirname,"../files"))
    },
    filename:function(req,file,cb){
        if(file){
            cb(null,new Date().toISOString().replace(/:/g,"-") + file.originalname)
        }else{
            cb(null , false)
        }
    }
})

module.exports.upload = multer({
    storage:photoStorage,
    fileFilter:function(req,file,cb){
        if(file.mimetype.startsWith('pfd')){
            cb(null ,true)
        }else{
            cb({message:'Unsupported file format'},false)
        }
    },
    limits:{fileSize:1024 * 1024}
})
