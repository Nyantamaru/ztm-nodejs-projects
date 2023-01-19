const path = require('path');

function getMessages(req, res) {
  //path.join(__dirname, '..', 'public', 'skimountain.jpg');
  res.render('messages', {
    title: 'Messages to my Friend',
    friend: 'Elon Musk',
  });
  //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(req, res) {
  console.log('Updating messasges...');
}

module.exports = { getMessages, postMessage };
