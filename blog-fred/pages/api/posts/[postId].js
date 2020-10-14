const mongoose = require('mongoose');
import mongoConnection from "../../../lib/api/mongo-connection"

require('dotenv/config');
const Post = require('../../../data/models/Post');



export default (req, res) => {

  if (req.method === 'GET') {

    mongoConnection();

 const {
       param: {_id},
   } = req;

    Post.findById({_id}, function(err, post) {
      if (err) {
        return console.error(err);
      } else {
        res.status(200).json(post)
        console.log(post);
          }
    });
} else {
    res.statusCode = 401;
    res.end();
}
};