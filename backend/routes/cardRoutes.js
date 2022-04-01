const express = require('express')
const router = express.Router()
const {getCards, setCard, updateCard, deleteCard} = require('../controllers/cardController')
const {protect} = require('../middleware/authMiddleware')
const multer =require('multer')
const cookieParser = require('cookie-parser')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    if(file)
    {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
            cb(null, true)
        }else{
            cb(new Error("Please upload an image!"), false)
        }
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

//Protect Card Routes w/ JWT Authentication
router.use(protect)

router.route('/').get(getCards).post(upload.single('cardImage'), setCard)
router.route('/:id').put(updateCard).delete(deleteCard)

module.exports = router
