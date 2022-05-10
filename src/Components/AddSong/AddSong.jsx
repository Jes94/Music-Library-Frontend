import axios from "axios";
import React, { useState } from "react";


const AddSong = () => {
    const[title, setTitle] = useState('')
    const[artist, setArtist] = useState('')
    const[album, setAlbum] = useState('')
    const[release_date, setReleaseDate] = useState('')
    const[genre, setGenre] = useState('')

    async function handleSubmit(event) {
        try{
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
            window.location.reload();
        }   }
        catch(ex){
            console.log('Error while posting song to database')
        }
    }
    return (
        <div className="container">
            <h4>Add a song</h4>
        <form onSubmit={handleSubmit} className='form'>
            <div className="row">
                <div className="col">
                <label htmlFor="inputTitle">Title</label>
                <input type="text" className="form-control" id="inputTitle" value={title} onChange = {(event) => setTitle(event.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="inputArtist">Artist</label>
                <input type="text" className="form-control" id="inputArtist" value={artist} onChange = {(event) => setArtist(event.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="inputAlbum">Album</label>
                <input type="text" className="form-control" id="inputAlbum" value={album} onChange = {(event) => setAlbum(event.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="inputDate">Release Date</label>
                <input type="date" className="form-control" id="inputDate" value={release_date} onChange = {(event) => setReleaseDate(event.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="inputGenre">Genre</label>
                <input type="text" className="form-control" id="inputGenre" value={genre} onChange = {(event) => setGenre(event.target.value)}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-9"/>
                <button type='submit' className= "col-3 btn btn-primary">Add</button>
            </div>
        </form>
        </div>
    )
}
export default AddSong;