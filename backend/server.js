const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const songRoutes = require('./routes/songs');
const playlistRoutes = require('./routes/playlists');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/songs', songRoutes);
app.use('/playlists', playlistRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
