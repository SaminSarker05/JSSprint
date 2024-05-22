const author = (req, res, next) => {
  const {user} = req.query;
  if (user === "samin") {
    console.log('authorized');
    next();
  } else {
    res.status(404).send('cannot authorisze');
  }
}

module.exports = author;