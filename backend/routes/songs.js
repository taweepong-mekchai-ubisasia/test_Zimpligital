const express = require('express');
const router = express.Router();
const db = require('../models');

// Fetch all songs
router.get('/', async (req, res) => {
  try {
    const songs = await db.Song.findAll();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search songs
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const songs = await db.Song.findAll({
      where: {
        title: {
          [db.Sequelize.Op.like]: `%${q}%`
        }
      }
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
