import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name: {
type: String,
trim: true,
required: 'Name is required'
},
description: {
type: String,
trim: true,
required: 'Description is required'
},
price: {
    type: Number,
    trim: true,
    required: 'Price is required'
    },
    quantity: {
    type: Number,
    trim: true,
    required: 'Quantity is required'
    },
    category: {
        type: String,
        trim: true,
        required: 'Category is required'
        }
    });
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('User', UserSchema);
