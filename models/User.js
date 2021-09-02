const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   min: 5,
    //   max: 50,
    // },

    username: {
      type: String,
      required: true,
      min: 5,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024, // hashed password
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // confirmed: {
    //     type: Boolean,
    //     default: false
    // },

    // tokens : [{
    //     token : {
    //         type : String ,
    //         required : true
    //     }
    // }],
  }
  // {
  //     collection: 'users'
  // }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
