//Require Mongoose
var mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema
const restaurantSchema = new Schema ({
  name: {type: String, required: true},
  name_en : {type: String, required: true},
  category: {type: String, required: true},
  image: {type: String, required: true},
  location: {type: String, required: true},
  phone: {type: String, required: true},
  google_map: {type: String, required: true},
  rating: {type: Number, required: true},
  description: {type: String, required: true}
})

// Compile model from schema
module.exports = mongoose.model('restaurant', restaurantSchema)