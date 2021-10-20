
const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Here i created a method for userSchema called encryptPassword
userSchema.methods.encryptPassword = async (password) => {
  // get the password
  return await bcrypt.hash(password, 8); // 8 is a cicle this been hashed 8 times
  // and then return the password hashed by a function of bcrypt
};
//Here i created a static method to find credentials and validate password
userSchema.statics.findByCredentials = async (email, password) => {
    //Get email and password
    const user = await User.findOne({ email }); //Search by email using the model (findOne is a static method)
    if (user) {
      // If user exist
      const isMatch = await bcrypt.compare(password, user.password);
      // use a function called compare from bcrypt and compare the password with the user.password in the database.
    }
  };
// here i created a method for each User called generateAuthToken
userSchema.methods.generateAuthToken = async function () {
    const user = this;
  
    const token = jwt.sign(
      // With jwt.sing() we create a token
      { _id: user._id.toString() }, // I pass the user id in an object
      process.env.AUTHTOKENSTRING // I use an environment variable to encrypt the token with a secret word
    );
    user.tokens = user.tokens.concat({ token }); // And then I put the new token in the user's token array
  };

  
  //----------------------
const postSchema = new Schema(
  {
    image: String,
    title: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
          }
        },
      },
    description: String,
    markdown: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;