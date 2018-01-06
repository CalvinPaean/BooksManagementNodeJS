const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,//trim the spaces entered by user
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    pages: Number,
    price: Number,
    stores:{
        type: [],
        default: null,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book};