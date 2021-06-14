const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema(
    {
    name: { type: String, required: true },
    chonkyness: { type: String, required: true },
    imagelink: { type: String, required: true },
    biography: { type: String, required: true },
  },
  //nessecary to keep timestamps
  { timestamps: true },
);

module.exports = mongoose.model("CatSchema", CatSchema);