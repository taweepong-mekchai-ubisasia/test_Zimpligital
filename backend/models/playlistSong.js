// models/playlistSong.js
module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define(
    'PlaylistSong',
    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'playlists',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'songs',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: true,
      tableName: 'playlist_songs',
    }
  );

  return PlaylistSong;
};
