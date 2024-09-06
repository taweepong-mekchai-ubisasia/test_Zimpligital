// models/song.js
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  // ความสัมพันธ์
  Song.associate = (models) => {
    Song.belongsToMany(models.Playlist, {
      through: 'playlist_songs',
      foreignKey: 'song_id',
      otherKey: 'playlist_id',
    });
  };

  return Song;
};
