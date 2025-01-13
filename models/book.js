const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, requrired: true}, 
  author: { type: Schema.Types.ObjectIb, ref: "Author", required: true},
  summary: { type: String, required: true},
  ibsn: { type:String, required: true }, 
  genre:[{ type: Schema.Types.ObjectId, ref:"Genre"}],
});


BookSchema.virtual("url").get(function () {

  return `/catalog/book/${this._id}`;
});


// Export model 

module.exports = mongoose.model("Book", BookSchema);

