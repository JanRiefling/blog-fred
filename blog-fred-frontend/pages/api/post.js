const mongoose = require('mongoose');
import mongoConnection from "../../lib/api/mongo-connection"

require('dotenv/config');
const Post = require('../../data/models/Post');



export default (req, res) => {

  if (req.method === 'POST') {

    mongoConnection();
    let newPost = new Post(req.body);

    newPost.save(function(err, post) {
      if (err) {
        return console.error(err);
      } else {
        console.log("Good insert");
          }
    });
} else {
    res.statusCode = 401;
    res.end();
}
};