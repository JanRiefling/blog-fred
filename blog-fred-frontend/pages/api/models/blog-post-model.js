const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  

const postSchema = new Schema ({
    title: { type: String, required: true},
    subtitle: { type: String},
    body: { type: String, required: true },
    timestamp: {type: Date, default: Date.now},
    vote: {type: Number},
    categories: [{type: String}],
    keywords: [{type: String}],
  }, {collection: 'posts'});


  module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);