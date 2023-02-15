import AlbumArtist from "../models/AlbumArtist.js";
import ArtistGenre from "../models/ArtistGenre.js";
import User from "../models/User.js";
import Track from "../models/Track.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Country from "../models/Country.js";
import Image from "../models/Image.js";
import Album from "../models/Album.js";
import Playlist from "../models/Playlist.js";
import PlaylistTrack from "../models/PlaylistTrack.js";
import TrackArtist from "../models/TrackArtist.js";
import '../models/Song.js'
import '../models/Review.js'

// Album relations ----------------------------
Album.hasMany(Track, { as: 'tracks', foreignKey: 'album_id' });
Track.belongsTo(Album, { as: 'album', foreignKey: 'album_id' });

Album.hasMany(Image, {
  foreignKey: 'entity_id',
  constraints: false,
  scope: { type: 'album' },
  as: 'images'
})
Image.belongsTo(Album, { as: 'album', foreignKey: 'entity_id', constraints: false });

Album.belongsToMany(Artist, {
  through: { model: AlbumArtist, unique: false },
  foreignKey: 'album_id',
  otherKey: 'artist_id',
  as: 'artists'
});
Artist.belongsToMany(Album, {
  through: { model: AlbumArtist, unique: false },
  foreignKey: 'artist_id',
  otherKey: 'album_id',
  as: 'albums'
});

// Artist relations ----------------------------
Artist.hasMany(Image, {
  foreignKey: 'entity_id',
  constraints: false,
  scope: { type: 'artist' },
  as: 'images'
})
Image.belongsTo(Artist, { as: 'artist', foreignKey: 'entity_id', constraints: false });

Artist.belongsToMany(Genre, {
  through: { model: ArtistGenre, unique: false },
  foreignKey: 'artist_id',
  otherKey: 'genre_id',
  as: 'genres'
});
Genre.belongsToMany(Artist, {
  through: { model: ArtistGenre, unique: false },
  foreignKey: 'genre_id',
  otherKey: 'artist_id',
  as: 'artists'
});

// Country relations ----------------------------
Country.hasMany(User, { foreignKey: 'country_id' });

// Playlist relations ----------------------------
Playlist.hasMany(Image, {
  foreignKey: 'entity_id',
  constraints: false,
  scope: { type: 'playlist' },
  as: 'images'
})
Image.belongsTo(Playlist, { as: 'playlist', foreignKey: 'entity_id', constraints: false });

Playlist.belongsToMany(Track, {
  through: { model: PlaylistTrack, unique: false },
  foreignKey: 'playlist_id',
  otherKey: 'track_id',
  as: 'tracks'
});
Track.belongsToMany(Playlist, {
  through: { model: PlaylistTrack, unique: false },
  foreignKey: 'track_id',
  otherKey: 'playlist_id',
  as: 'playlists'
});

// Track relations ----------------------------
Track.belongsToMany(Artist, {
  through: { model: TrackArtist, unique: false },
  foreignKey: 'track_id',
  otherKey: 'artist_id',
  as: 'artists'
});
Artist.belongsToMany(Track, {
  through: { model: TrackArtist, unique: false },
  foreignKey: 'artist_id',
  otherKey: 'track_id',
  as: 'tracks'
});

// User relations ----------------------------
User.hasMany(Image, {
  foreignKey: 'entity_id',
  constraints: false,
  scope: { type: 'user' },
  as: 'images'
})
Image.belongsTo(User, { as: 'user', foreignKey: 'entity_id', constraints: false });

User.hasMany(Playlist, { foreignKey: 'user_id' });
Playlist.belongsTo(User, { foreignKey: 'user_id' });

export const sequelize = User.sequelize