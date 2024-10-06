import multer from "multer"

// multer is used for file uploading 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")// cb is callback
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)// can be much optimised
    }
  })
  
  export const upload = multer({ 
    storage,
 })