import AlbumArtist from "../models/AlbumArtist.js";
import ArtistGenre from "../models/ArtistGenre.js";
import User from "../models/User.js";
import Track from "../models/Track.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Country from "../models/Country.js";
import "../models/Image.js";
import Album from "../models/Album.js";
import Playlist from "../models/Playlist.js";
import PlaylistTrack from "../models/PlaylistTrack.js";
import TrackArtist from "../models/TrackArtist.js";
// import AlbumImage from "../models/AlbumImage.js";
// import ArtistImage from "../models/ArtistImage.js";
// import PlaylistImage from "../models/PlaylistImage.js";
// import UserImage from "../models/UserImage.js";

// Album relations ----------------------------
Album.hasMany(Track, {foreignKey: 'album_id'});
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
// Album.belongsToMany(Image, {
//   through: { model: AlbumImage, unique: false },
//   foreignKey: 'album_id',
//   otherKey: 'image_id',
//   as: 'images'
// });
// Image.belongsToMany(Album, {
//   through: { model: AlbumImage, unique: false },
//   foreignKey: 'image_id',
//   otherKey: 'album_id',
//   as: 'albums'
// });

// Artist relations ----------------------------
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
// Artist.belongsToMany(Image, {
//   through: { model: ArtistImage, unique: false },
//   foreignKey: 'artist_id',
//   otherKey: 'image_id',
//   as: 'images'
// });
// Image.belongsToMany(Artist, {
//   through: { model: ArtistImage, unique: false },
//   foreignKey: 'image_id',
//   otherKey: 'artist_id',
//   as: 'artists'
// });

// Country relations ----------------------------
Country.hasMany(User, {foreignKey: 'country_id'});

// Playlist relations ----------------------------
// Playlist.belongsToMany(Image, {
//   through: { model: PlaylistImage, unique: false },
//   foreignKey: 'playlist_id',
//   otherKey: 'image_id',
//   as: 'images'
// });
// Image.belongsToMany(Playlist, {
//   through: { model: PlaylistImage, unique: false },
//   foreignKey: 'image_id',
//   otherKey: 'playlist_id',
//   as: 'playlists'
// });
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
User.hasMany(Playlist, {foreignKey: 'user_id'});
// User.belongsToMany(Image, {
//   through: { model: UserImage, unique: false },
//   foreignKey: 'user_id',
//   otherKey: 'image_id',
//   as: 'images'
// });
// Image.belongsToMany(User, {
//   through: { model: UserImage, unique: false },
//   foreignKey: 'image_id',
//   otherKey: 'user_id',
//   as: 'users'
// });

export const sequelize = User.sequelize