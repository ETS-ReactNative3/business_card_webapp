const asyncHandler = require('express-async-handler')
const { restart } = require('nodemon')
const Card = require('../models/cardModel')


// @desc Get card
// @route Get /api/cards
// @access Private
const getCards = asyncHandler(async (req, res) => {
     const cards = await Card.find()

     res.status(200).json(cards)
})


// @desc Set card
// @route Post /api/cards
// @access Private
const setCard = asyncHandler(async (req, res) => {

    const card = await Card.create({
        name: req.body.name,
        title: req.body.title,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        companyName: req.body.companyName,

    })
    res.status(200).json(card)
})

// @desc Update card
// @route Put /api/cards/id
// @access Private
const updateCard = asyncHandler(async (req, res) => {
    const Card = await Card.findById(req.params.id)

    if(!card) {
        res.status(400)
    }

    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedCard)

})


// @desc Delete card
// @route Delete /api/cards/id
// @access Private
const deleteCard = asyncHandler(async (req, res) => {
    const card = await(Card.findById(req.params.id))

    if(!card)
    {
        res.status(400)
    }

    await card.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getCards, setCard, updateCard, deleteCard
}