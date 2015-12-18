var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  Corn: String,
  Cotton: String,
  Soybean: String,
  Wheat: String
}, 
{
  collection: 'example'
});

mongoose.model('GraphData', GraphDataSchema);

