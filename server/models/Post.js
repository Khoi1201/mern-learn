const mongoose = require("mongoose");

const postSchema = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  status: {
    type: String,
    enum: ["TO DO", "DOING", "DONE"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
};

const Post = mongoose.model("Post", postSchema)

module.exports = Post