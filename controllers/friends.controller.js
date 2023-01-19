const model = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name 😭',
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  console.log({ newFriend });
  res.json(newFriend);
  console.log(req.body);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist 😭 ',
    });
  }
}

function getAllFriends(req, res) {
  res.json(model);
}

module.exports = { postFriend, getFriend, getAllFriends };
