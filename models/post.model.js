const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  title: {
    type: String,
    required: true,
  },
  summary: String,
  content: {
    type: String,
    required: true,
  },
  posted_at: String,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
