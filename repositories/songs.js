import db from "../utils/db.js";


// opsi 1 integrase ke spotify, endpoint audio analysis, audio playback, recommendation

// opsi 2 buat restapi + crud + sql, bikin table songs, fieldnya artis, judul, is_favorite, genre, 
// buat endpoint
// nambah lagu, update lagu, delete lagu,
// menampilkan semua lagu, menampilkan lagu berdasarkan genre,
//  menampilkan lagu berdasarkan favorite
export const getSong = (limit) => {
    const sql = "SELECT  id, artis, judul, is_favorite, genre, created_at FROM songs LIMIT ?";
    const values = [limit];

    return db.query(sql,values);
}

export const createSong = (artis, judul, is_favorite, genre) => {
    let created_at = new Date();
    const sql = "INSERT INTO songs(artis, judul, is_favorite, genre, created_at) value (?, ?, ?, ?, ?)"
    const values = [artis, judul, is_favorite, genre, created_at];

    return db.query(sql, values);

}

export const updateSong = (artis, judul, is_favorite, genre, id) => {
    let updated_at = new Date();
    const sql = "UPDATE songs SET artis = ?, judul = ?, is_favorite = ?, genre = ?, updated_at = ? WHERE id = ?";
    const values = [artis, judul, is_favorite, genre, updated_at, id];
    return db.query(sql, values);

}

export const deleteSong = (id) => {
    const sql = "DELETE FROM songs WHERE id = ?";
    const values = [id];
    return db.query(sql, values);
}

export const getSongByGenre = (genre) => {
    const sql = "SELECT id, artis, judul, is_favorite, genre, created_at, updated_at FROM songs WHERE genre =?";
    const values = [genre];
    return db.query(sql, values);
}

export const getSongByFavorite = (is_favorite) => {
    const sql = "SELECT id, artis, judul, is_favorite, genre, created_at, updated_at FROM songs WHERE is_favorite =?";
    const values = [is_favorite];
    return db.query(sql, values);
}
