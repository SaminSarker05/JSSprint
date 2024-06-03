const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
  const { username, password} = req.body;
  if (!username || !password) {
    return res.status(201).json("username and password required");
  }
  // use mongoose module to check match in DB HERE

  // create and sign new token, pass in payload and a secret key
  const id = new Date().getDate()
  const token = jwt.sign({id, username}, process.env.KEY, {expiresIn:'15d'});
  res.json({msg:'user created', token});
}

const dashboard = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.send("error");
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.KEY)
    return res.json(decoded);
  } catch (err) {
    console.log(err);
  }
  res.send("success");
}

module.exports = { login, dashboard }
