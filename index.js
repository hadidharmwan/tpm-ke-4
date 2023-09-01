// opsi 1 integrase ke spotify, endpoint audio analysis, audio playback, recommendation

// opsi 2 buat restapi + crud + sql, bikin table songs, fieldnya artis, judul, is_favorite, genre, 
// buat endpoint
// nambah lagu, update lagu, delete lagu,
// menampilkan semua lagu, menampilkan lagu berdasarkan genre,
//  menampilkan lagu berdasarkan favorite

import express from 'express';
import SongService from './services/songServices.js'

const app = express();
const port = 9090;
const host  = "localhost";

app.use(express.json());

app.get("/songs", SongService.getAllSongs);
app.get("/songs/:favorite", SongService.getFavoriteSongs);
app.get("/songs/:genre", SongService.getGenreSongs);
app.post("/songs", SongService.createNewSong);
app.post("/songs/:id", SongService.updateForSong);
app.delete("/songs/:id", SongService.deleteForSong);

app.listen(port, host, () =>{
    console.log(`Server berjalan di http://${host}:${port}`);
})
