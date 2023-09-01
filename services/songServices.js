import * as SongRepo from '../repositories/songs.js';
import { successResp } from '../utils/response.js';

export const getAllSongs =  async(request, response, next) => {
    try{
        const [result] = await SongRepo.getSong(100);
        successResp(response, "sukses!", result, 200 );
        
    }catch(error){
        next(error);
    }

}

export const getFavoriteSongs = async (request, response, next) => {

    try {
        let favorite = request.params.favorite;
        const [result] = await SongRepo.getSongByFavorite(favorite);

        successResp(response, "sukses", result, 200);
    } catch (error) {
        next(error);
    };
}


export const getGenreSongs = async (request, response, next) => {

    try {
        let genre = request.params.genre;
        const [result] = await SongRepo.getSongByGenre(genre);

        successResp(response, "sukses", result, 200);
    } catch (error) {
        next(error);
    };
}

export const createNewSong = async (request, response, next) => {

    try {
        let artis = request.body.artis;
        let judul = request.body.judul;
        let is_favorite = request.body.is_favorite;
        let genre = request.body.genre;


        const [result] = await SongRepo.createSong(artis, judul, is_favorite, genre);

        successResp(response, "sukses menambahkan data!", {id:result.insertId}, 201);
    } catch (error) {
        next(error);
    }
}

export const updateForSong = async (request, response, next) => {

    try {
        let id = request.params.id;
        let artis = request.body.artis;
        let judul = request.body.judul;
        let is_favorite = request.body.is_favorite;
        let genre = request.body.genre;

        const [result] = await SongRepo.updateSong(artis, judul, is_favorite, genre,id);
        successResp(response, "sukses menupdate data!", result[0]);
    } catch (error) {
        next(error);
    }
}

export const deleteForSong = async (response, request, next) => {

    try {
        let id = request.params.id;

        const [result] = await SongRepo.deleteSong(id);
        successResp(response, "data berhasil dihapus", result[0]);
    } catch (error) {
        next(error);
    }
}

