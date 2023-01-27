'use strict';

const db = require('../db');
const { NotFoundError } = require('../expressError');



class Artist {


  static async add(data) {
    const handle = data.name.toLowerCase().split(' ').join('-');

    const duplicateCheck = await db.query(
      `SELECT id
           FROM artists
           WHERE id = $1`,
      [data.id]
    );

    if (duplicateCheck.rows[0]) return;

    const result = await db.query(
      `INSERT INTO artists (id, name, handle, image)
           VALUES ($1, $2, $3, $4)
           RETURNING id, 
                    name,
                    handle,
                    image`,
      [data.id, data.name, handle, data.image]
    );
    let artist = result.rows[0];

    return artist;
  }


  static async findAll() {
    let query = `SELECT id, name, handle, image
                 FROM artists
                 ORDER BY name ASC`;
    const artistsRes = await db.query(query);
    return artistsRes.rows;
  }


  static async get(id) {
    const artistRes = await db.query(
      `SELECT id, name, handle, image
          FROM artists
          WHERE id = $1`,
      [id]
    );

    const artist = artistRes.rows[0];

    if (!artist) throw new NotFoundError(`No artist: ${id}`);

    const albumRes = await db.query(
      `SELECT ab.id, ab.name, ab.handle, ab.artist_id, ab.release_date, ab.image
        FROM albums AS ab
        JOIN artists AS at ON ab.artist_id = at.id
        WHERE at.id = $1`,
      [id]
    );

    const songRes = await db.query(
      `SELECT DISTINCT s.key, s.id, s.name, s.duration_ms, s.explicit, to_char(s.added_at, 'yyyy-mm-dd hh:mi:ss AM') AS "added_at", s.artist_id, s.album_id, s.image
          FROM songs AS s
          JOIN albums AS ab ON s.artist_id = ab.artist_id
          WHERE s.artist_id = $1`,
      [id]
    );

    artist.albums = albumRes.rows;
    artist.songs = songRes.rows;

    return artist;
  }
}

module.exports = Artist;
