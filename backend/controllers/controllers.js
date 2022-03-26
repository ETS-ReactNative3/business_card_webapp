const asyncHandler = require('express-async-handler')
const Card = require('../models/cardModel')


// @desc 
// @route
// @access
const getCards = (req, res) => {
    res.status(200).json({name: 'test'})
}

// @desc 
// @route
// @access
const createCard = (req, res) => {

    res.status(200).json({name: 'test'})

}

// @desc 
// @route
// @access
const updateCard = (req, res) => {

    res.status(200).json({name: 'test'})

}

// @desc 
// @route
// @access
const deleteCard = (req, res) => {
 
   res.status(200).json({name: 'test'})
}

module.exports = {
    getCards,
    createCard,
    updateCard,
    deleteCard
}