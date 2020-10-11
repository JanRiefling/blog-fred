const mongoose = require('mongoose');

require('dotenv/config');
const Post = require('./models/Post');



export default (req, res) => {

  if (req.method === 'POST') {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

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

if(req.method === 'GET') {

  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  Post.find({}, function(err, posts){
    if (err) {
      return console.error(err);
    } else {
      console.log("Found all");
      res.status(200).json(posts);
        }
  });

} else {
  res.statusCode.log;
  res.end();
}
};