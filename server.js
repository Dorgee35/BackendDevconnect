const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// this is going to look for an enviornment variable called port to use if not found will use port 5000
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API running');
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
