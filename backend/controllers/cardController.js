const asyncHandler = require('express-async-handler')
const { restart } = require('nodemon')
const Card = require('../models/cardModel')

// @desc Get card
// @route Get /api/cards
// @access Private
const getCards = asyncHandler(async (req, res) => {
     const cards = await Card.find({user: req.user.id})

     res.status(200).json(cards)
})


// @desc Set card
// @route Post /api/cards
// @access Private
const setCard = (req, res) => {
    console.log(req.file)
    console.log(req.body)

    const card =  Card.create({
        user: req.user.id,
        name: req.body.name,
        title: req.body.title,
        email: req.body.email,
        email2: req.body.email2,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        phoneNumber2: req.body.phoneNumber2,
        faxNumber: req.body.faxNumber,
        companyName: req.body.companyName,
        cardImage: req.file.originalname,
        cardImagePath: req.file.path
    })
    res.status(200).json(card)
}

// @desc Update card
// @route Put /api/cards/id
// @access Private
const updateCard = asyncHandler(async (req, res) => {
    const card = await Card.findById(req.params.id)

    if(!card) {
        res.status(400)
        throw new Error('Card not Found')
    }


    //Check for user
    if(!req.user)
    {
        res.status(401)
        throw new Error('User not found')
    }

    if(card.user.toString() !== req.user.id)
    {
        res.status(401)
        throw new Error('Unauthorized User')
    }

    const updatedCard = await card.findByIdAndUpdate(req.params.id, req.body, {new: true})

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
        throw new Error('Card not Found')
    }

    

    //Check for user
    if(!req.user)
    {
        res.status(401)
        throw new Error('User not found')
    }

    if(card.user.toString() !== req.user.id)
    {
        res.status(401)
        throw new Error('Unauthorized User')
    }

    await card.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getCards, setCard, updateCard, deleteCard
}