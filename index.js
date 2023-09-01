import express from 'express';
import * as SongService from './services/songServices.js';

const app = express();
const port = 9090;
const host  = "localhost";

app.use(express.json());

app.get("/songs", SongService.getAllSongs);
app.get("/songs/favorite/:favorite", SongService.getFavoriteSongs);
app.get("/songs/genre/:genre", SongService.getGenreSongs);
app.post("/songs", SongService.createNewSong);
app.post("/songs/:id", SongService.updateForSong);
app.delete("/songs/delete/:id", SongService.deleteForSong);
app.get("/songs/detail/:id", SongService.getByIdSong);



app.listen(port, host, () =>{
    console.log(`Server berjalan di http://${host}:${port}`);
})
