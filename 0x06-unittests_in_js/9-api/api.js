const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ pong: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

module.exports = app;

