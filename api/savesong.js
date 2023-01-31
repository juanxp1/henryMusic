const pg = require("pg"); //Interactua con la base de datos
const fs = require("fs"); //Lee el archivo de la canción

const client = new pg.Client({
    user: "root",
    password: "your_password",
    host: "localhost",
    port: 5432,
    database: "your_database"
});

client.connect();

fs.readFile("song.mp3", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const songData = {
        name: "song name",
        data: data
    };

    const query = "INSERT INTO songs (name, data) VALUES ($1, $2)";
    const values = [songData.name, songData.data];

    client.query(query, values, (err, res) => {
        if (err) {
            console.error(err);
            client.end();
            return;
        }

        console.log("Song saved successfully!");
        client.end();
    });
});

