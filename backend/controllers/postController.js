const postModel = require('../models/postModel');

const createPost = async (req, res) => {
  const { imageUrl, text } = req.body;

  if (!imageUrl && !text) {
    return res.status(400).json({ error: 'At least one of imageUrl or text is required' });
  }

  try {
    const post = await postModel.createPost(imageUrl, text);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

module.exports = {
  createPost,
};
