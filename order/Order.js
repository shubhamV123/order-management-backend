var mongoose = require('mongoose');  
var OrderSchema = new mongoose.Schema({  
  brocolli_weight: Number,
  brocolli_price: Number,
  iceberg_weight: Number,
  iceberg_price: Number,
  name: String,
  email: String,
  total: Number
});
mongoose.model('Order', OrderSchema);

module.exports = mongoose.model('Order');