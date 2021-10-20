const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    image: String,
    title: {
      type: String,
      required: true,
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