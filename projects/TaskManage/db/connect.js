const mongoose = require("mongoose");

// create a database call TASK-MANAGER
const connect = "mongodb+srv://saminsarker05:1cxJ5G2H26w4VwmJ@jssprint.trzwnpr.mongodb.net/TASK-MANAGERyWrites=true&w=majority&appName=JSSprint"

const connectDB = (url) => {
  return mongoose.connect(connect);
}

module.exports = connectDB