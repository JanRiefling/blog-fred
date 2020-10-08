const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

export default (req, res) => {
  if (req.method === 'GET') {
    if (!('token' in req.cookies)) {
      return res.status(401).json({message: 'Unable to auth'});
    }
    let decoded;
    const token = req.cookies.token;
    if (token) {
      try {
        decoded = jwt.verify(token, jwtSecret);
      } catch (e) {
        console.error(e);
      }
    }

    if (decoded) {
      return res.json(decoded);
    } else {
      res.status(401).json({message: 'Unable to auth'});
    }
  }
};