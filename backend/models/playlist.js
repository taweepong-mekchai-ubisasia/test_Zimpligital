// models/playlist.js
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
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
  Playlist.associate = (models) => {
    Playlist.belongsToMany(models.Song, {
      through: 'playlist_songs',
      foreignKey: 'playlist_id',
      otherKey: 'song_id',
    });
  };

  return Playlist;
};
