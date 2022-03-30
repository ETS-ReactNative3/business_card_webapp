const express = require('express')
const router = express.Router()
const {getCards, setCard, updateCard, deleteCard} = require('../controllers/cardController')
const {protect} = require('../middleware/authMiddleware')
const multer =require('multer')
const upload = multer({dest: 'uploads/'})

//Protect Card Routes w/ JWT Authentication
router.use(protect)

router.route('/').get(getCards).post(upload.single('cardImage'), setCard)
router.route('/:id').put(updateCard).delete(deleteCard)

module.exports = router
