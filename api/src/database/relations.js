import User from "../models/User.js";
import Image from "../models/Image.js";
import Track from "../models/Tracks.js";
import Artist from "../models/artist.js";
import Genre from "../models/Genre.js";
import Country from "../models/Country.js";
import Album from "../models/album.js";
import Playlist from "../models/playlist.js";


User.belongsToMany(Image, {through: 'user_images'});
Image.belongsToMany(User, {through: 'user_images'});

Country.hasMany(User, {foreignKey: 'country_id'});

Track.belongsToMany(Artist, {through: 'track_artists'});
Artist.belongsToMany(Track, {through: 'track_artists'});

Album.hasMany(Track, {foreignKey: 'album_id'});

Album.belongsToMany(Artist, {through: 'album_artists'});
Artist.belongsToMany(Album, {through: 'album_artists'});

Genre.belongsToMany(Artist, {through: 'artist_genres'});
Artist.belongsToMany(Genre, {through: 'artist_genres'});

User.hasMany(Playlist, {foreignKey: 'user_id'});

Playlist.belongsToMany(Track, {through: 'playlist_tracks'});
Track.belongsToMany(Playlist, {through: 'playlist_tracks'});

Image.hasMany(Playlist, {foreignKey: 'image_id'})

Image.belongsTo(Album, {foreignKey: 'image_id'})

Image.belongsTo(Artist, {foreignKey: 'image_id'})

export const sequelize = User.sequelize