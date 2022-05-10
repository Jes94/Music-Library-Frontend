import { useState } from 'react';

function SearchBar(props) {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("")
    const [genre, setGenre] = useState("")
    const [release_date, setReleaseDate] = useState("")

    const searchButtonPressed = () => {
        props.updateSearchParams({title: title, artist: artist, album: album, genre: genre, release_date:release_date})
    };
    return (
        <div className="container">
            <div className="row">
            <h4>Search for a song</h4>
            </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="title-field">Title:</label>
                        <input className="form-control" id="title-field" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="artist-field">Artist:</label>
                        <input className="form-control" id="artist-field" type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="album-field">Album:</label>
                        <input className="form-control" id="album-field" type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="genre-field">Genre:</label>
                        <input className="form-control" id="genre-field" type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="date-field">Release Date:</label>
                        <input className="form-control" id="date-field" type="date" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-9"/>
                    <button type="button" className= "col-3 btn btn-primary" onClick={searchButtonPressed}>Search</button>
                </div>

            
        </div>
    )
}

export default SearchBar