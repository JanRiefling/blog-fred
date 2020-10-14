const mongoose = require('mongoose');
const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
import mongoConnection from "../../lib/api/mongo-connection"


require('dotenv/config');
const User = require('../../data/models/User');



export default (req, res) => {
  if (req.method === 'POST') {
    try{
      assert.notStrictEqual(null, req.body.username, 'Username required');
      assert.notStrictEqual(null, req.body.password, 'Password required');
    } catch(bodyError) {
      res.status(403).send(bodyError.message);
    }

    mongoConnection();

    User.findOne({username: req.body.username}, function(err, user) {
      if (err) {
        return res.status(500).json({error: true, message: 'Error finding User'});
      }
      if (!user) {
        return res.status(404).json({error: true, message: 'User not found'});
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, match) {
          if(err) {
            res.status(500).json({error: true, message: 'Auth Failed'});
          }
          if (match) {
            const token = jwt.sign(
              {userId: user.userId, username: user.username},
              jwtSecret,
              {
                expiresIn: 3000, //50 minutes
              },
            );
            return res.status(200).json({token});
          } else {
            return res.status(401).json({error: true, message: 'Auth Failed'});
          }
        });
        }
    });


  } else {
    res.statusCode = 401;
    res.end();
  }
};
