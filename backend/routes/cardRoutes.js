const express = require('express')
const router = express.Router()
const {getCards, setCard, updateCard, deleteCard} = require('../controllers/controllers')



router.route('/').get(getCards).post(setCard)
router.route('/:id').put(updateCard).delete(deleteCard)

module.exports = router
