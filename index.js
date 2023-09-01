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
