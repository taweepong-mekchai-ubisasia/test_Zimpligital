const express = require('express');
const router = express.Router();
const db = require('../models');

// Fetch all playlists
router.get('/', async (req, res) => {
  try {
    const playlists = await db.Playlist.findAll({
      include: db.Song
    });
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new playlist
router.post('/', async (req, res) => {
  try {
    const playlist = await db.Playlist.create(req.body);
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a song to a playlist
router.post('/:id/songs', async (req, res) => {
  try {
    const playlist = await db.Playlist.findByPk(req.params.id);
    const song = await db.Song.findByPk(req.body.songId);
    await playlist.addSong(song);
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
