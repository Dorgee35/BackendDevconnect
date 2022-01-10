const express = require('express');

const app = express();

// this is going to look for an enviornment variable called port to use if not found will use port 5000
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
