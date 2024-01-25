const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { Post, validatePost } = require("../models/post");
const { Reply, validateReply } = require("../models/replies");
const { User } = require("../models/user");
const auth = require("../middleware/auth");
const { Tag } = require("../models/tag");




// router.post("/create", auth, async (req, res) => {
//   const { error } = validatePost(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   const tags = req.body.tags;
//   const tags_array = [];
//   for (let i = 0; i < tags.length; i++) {
//     const tag_in_db = await Tag.findById(tags[i]);
//     if (!tag_in_db) return res.status(400).send("Invalid Tag");
//     tags_array.push(tag_in_db);
//   }
//   const post = new Post({
//     title: req.body.title,
//     tags: tags_array,
//     description: req.body.description,
//     author: req.user._id,
//     views: 1,
//   });
//   try {
//     await post.save();
//     res.send("Post succesfully created.");
//   } catch (err) {
//     console.log("error: ", err);
//   }
// });


router.post("/biker",auth, async (req, res) => {
  console.log("Request Body:", req.body);

  try {
    const biker = await Biker.create(req.body);
    console.log("Biker created:", biker);
    res.status(201).json(biker);
  } catch (err) {
    console.error("Error creating biker:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});
module.exports = router;
