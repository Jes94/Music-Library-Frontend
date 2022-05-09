import axios from "axios";
import React, { useState } from "react";


const AddSong = (props) => {
    const[title, setTitle] = useState('')
    const[artist, setArtist] = useState('')
    const[album, setAlbum] = useState('')
    const[release_date, setReleaseDate] = useState('')
    const[genre, setGenre] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        };
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        if(response.status === 201){
            alert('Song Added!')
        }   
    }
    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className="form-group row">
                <label htmlFor="inputTitle" className="col-sm-2">Title</label>
                <input type="text" className="form-control" id="inputTitle" value={title} onChange = {(event) => setTitle(event.target.value)}/>
                <label htmlFor="inputArtist" className="col-sm-2">Artist</label>
                <input type="text" className="form-control" id="inputArtist" value={artist} onChange = {(event) => setArtist(event.target.value)}/>
                <label htmlFor="inputAlbum" className="col-sm-2">Album</label>
                <input type="text" className="form-control" id="inputAlbum" value={album} onChange = {(event) => setAlbum(event.target.value)}/>
                <label htmlFor="inputDate" className="col-sm-2">Release Date</label>
                <input type="date" className="form-control" id="inputDate" value={release_date} onChange = {(event) => setReleaseDate(event.target.value)}/>
                <label htmlFor="inputGenre" className="col-sm-2">Genre</label>
                <input type="text" className="form-control" id="inputGenre" value={genre} onChange = {(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit' className="btn btn-primary">Add</button>
        </form>
    )
}
export default AddSong;