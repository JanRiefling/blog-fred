const mongoose = require('mongoose');
const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

require('dotenv/config');
/* let User = require('./models/user_model'); */

export const User = mongoose.models.User || mongoose.model('User', userSchema);

export default (req, res) => {
  if (req.method === 'POST') {
    try{
      assert.notStrictEqual(null, req.body.username, 'Username required');
      assert.notStrictEqual(null, req.body.password, 'Password required');
    } catch(bodyError) {
      res.status(403).send(bodyError.message);
    }

    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    User.findOne({username: req.body.username}, function(err, user) {
      if (err) {
        res.status(500).json({error: true, message: 'Error finding User'});
        return;
      }
      if (!user) {
        res.status(404).json({error: true, message: 'User not found'});
        return;
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, match) {
          if(err) {
            res.status(500).json({error: true, message: 'Auth Failed'});
          }
          if (match) {
            const token = jwt.sign(
              {userId: user.userId, email: user.email},
              jwtSecret,
              {
                expiresIn: 3000, //50 minutes
              },
            );
            res.status(200).json({token});
            return;
          } else {
            res.status(401).json({error: true, message: 'Auth Failed'});
            return;
          }
        });
        }
    });


  } else {
    res.statusCode = 401;
    res.end();
  }
};
