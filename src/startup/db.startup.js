const mongoose = require("mongoose");
const { DB_URI } = process.env;

module.exports = () => {
  return mongoose
    .connect(DB_URI)
    .then((res) => console.log("💽 Database is Connected Successfully"))
    .catch((err) => console.log("Please Restart Server", err));
};
