const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
   bookName: {
       type: String,
       required: true
   },
   author: String,
   tags: [ String ], //array of strings
   year: Number,
   prices: {
       indianPrice: String,
       europeanPrice: String,
       japanPrice: String
   },
   totalPages: Number,
   stockAvaliable: Boolean
 
}, {timestamps: true} )
 
module.exports = mongoose.model( 'Book2', bookSchema )