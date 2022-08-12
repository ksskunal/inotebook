const mongoose = require("mongoose");
const dbUri = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(dbUri, () => {
    console.log("connected to mongoDB");
  });
};

module.exports = connectToMongo;
