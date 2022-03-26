const express = require('express')
const router = express.Router()
const {getCards, createCard, updateCard, deleteCard} = require('../controllers/controllers')


module.exports = router

router.route('/').get(getCards).post(createCard)
router.route('/:id').put(updateCard).delete(deleteCard)