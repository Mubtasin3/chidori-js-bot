const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Bot is online and running!');
});

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
