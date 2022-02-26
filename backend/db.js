const mongoose = require('mongoose');

const url ="mongodb+srv://ChiragTanksali:fLmPHR4CkgSveWPL@cluster0.pcspk.mongodb.net/Quora-clone?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

