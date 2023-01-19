const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next(); // Dont't forget to put next() if it is not here the promam flow get stuck
  // actons go here...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// relative to the folder where I lunch my node app
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My friends are very clever',
    caption: "let's go skiing!!!",
  });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...🙂`);
});

//goto:13
