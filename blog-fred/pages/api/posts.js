const mongoose = require('mongoose');
import mongoConnection from "../../lib/api/mongo-connection"

require('dotenv/config');
const Post = require('../../data/models/Post');



export default (req, res) => {

  if (req.method === 'GET') {

    mongoConnection();
   

    Post.find({}, function(err, posts) {
      if (err) {
        return console.error(err);
      } else {
        res.status(200).json(posts);
          }
    });
} else {
    res.statusCode = 401;
    res.end();
}
};