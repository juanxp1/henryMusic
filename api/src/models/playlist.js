'use strict';

const db = require('../db');
const { BadRequestError, NotFoundError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sql');


class Playlist {
  
  static async create({ name, username, description, image }) {
    const handle = name.toLowerCase().split(' ').join('-').replace('#', '');

    const duplicateCheck = await db.query(
      `SELECT handle
           FROM playlists
           WHERE handle = $1`,
      [handle]
    );

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate playlist: ${name}`);

   
    await db.query(
      `SELECT SETVAL(
          'playlists_id_seq',
          (SELECT (MAX("id")) FROM "playlists"),
          TRUE)`
    );

    const result = await db.query(
      `INSERT INTO playlists
           (name, handle, username, description, created_at, image)
           VALUES ($1, $2, $3, $4, now(), $5)
           RETURNING name, username, description, image`,
      [name, handle, username, description, image]
    );
    const playlist = result.rows[0];

    return playlist;
  }


  static async addToPlaylist(playlistID, songKey) {
   
    const result = await db.query(
      `INSERT INTO playlist_songs
           (playlist_id, song_key)
           VALUES ($1, $2)
           RETURNING playlist_id, song_key`,
      [playlistID, songKey]
    );
    const playlist = result.rows[0];

    return playlist;
  }

  

  static async findAll() {
    const playlistsRes = await db.query(
      `SELECT id, name, handle, username, description, to_char(created_at, 'yyyy-mm-dd hh:mi:ss AM') AS "created_at", image
                 FROM playlists 
                 ORDER BY created_at DESC`
    );
    return playlistsRes.rows;
  }


  static async get(handle) {
    const playlistRes = await db.query(
      `SELECT id, name, handle, username, description, to_char(created_at, 'yyyy-mm-dd hh:mi:ss AM') AS "created_at", image
           FROM playlists
           WHERE handle = $1`,
      [handle]
    );

    const playlist = playlistRes.rows[0];

    if (!playlist) throw new NotFoundError(`No playlist: ${handle}`);

    const userRes = await db.query(
      `SELECT u.display_name, u.image, u.profile_url
          FROM users AS u
          JOIN playlists AS p ON p.username = u.username
          WHERE p.handle = $1`,
      [handle]
    );

    const songRes = await db.query(
      `SELECT s.key, 
              s.id, 
              s.name, 
              s.duration_ms, 
              s.explicit, 
              to_char(s.added_at, 'yyyy-mm-dd hh:mi:ss AM') AS "added_at",
              at.image,
              at.name AS "artist_name", 
              ab.name AS "album_name",
              ab.release_date AS "album_release_date",
              ab.image
        FROM playlists AS p
          JOIN playlist_songs AS pls ON p.id = pls.playlist_id
          JOIN songs AS s ON pls.song_key = s.key
          JOIN albums AS ab ON s.album_id = ab.id
          JOIN artists AS at ON s.artist_id = at.id      
          WHERE p.handle = $1
          ORDER BY s.added_at ASC`,
      [handle]
    );
    playlist.user = userRes.rows[0];
    playlist.songs = songRes.rows;

    return playlist;
  }
 
  static async update(handle, data) {
    const { setCols, values } = sqlForPartialUpdate(data, {
      name: 'name',
      description: 'description',
      image: 'image'
    });
    const handleVarIdx = '$' + (values.length + 1);

    const querySql = `UPDATE playlists 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING name, handle, description, image`;
    const result = await db.query(querySql, [...values, handle]);
    const playlist = result.rows[0];

    if (!playlist) throw new NotFoundError(`No playlist: ${handle}`);

    return playlist;
  }



  static async remove(id) {
    // delete songs from playlist (relation table)
    await db.query(
      `DELETE
           FROM playlist_songs
           WHERE playlist_id = $1`,
      [id]
    );

    const playlistRes = await db.query(
      `DELETE
           FROM playlists
           WHERE id = $1
           RETURNING name`,
      [id]
    );
    const playlist = playlistRes.rows[0];

    if (!playlist) throw new NotFoundError(`No playlist: ${id}`);

    return playlist;
  }



  static async removeSong(playlistId, songKey) {
    // check if song in more than one playlist
    const songInMultiplePlaylists = await db.query(
      `SELECT playlist_id, song_key
           FROM playlist_songs
           WHERE song_key = $1`,
      [songKey]
    );
    if (!songInMultiplePlaylists.rows[0])
      throw new NotFoundError(`No song: ${songKey}`);

    // don't delete song from db if it's also in another playlist
    if (songInMultiplePlaylists.rows[1]) {
      await db.query(
        `DELETE
          FROM playlist_songs
          WHERE playlist_id=$1 AND song_key = $2`,
        [playlistId, songKey]
      );
      return;
    }

    /********** delete from relation tables *********/
    await db.query(
      `DELETE
        FROM playlist_songs
        WHERE song_key = $1`,
      [songKey]
    );
    await db.query(
      `DELETE
        FROM album_songs
        WHERE song_key = $1`,
      [songKey]
    );
    await db.query(
      `DELETE
        FROM artist_songs
        WHERE song_key = $1`,
      [songKey]
    );
  }
}

module.exports = Playlist;
