import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddSong from "./Components/AddSong/AddSong";
import "./App.css"
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data)
  }
  const [filters, setFilters] = useState({});
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }
  const filterSongs = (data) => {
    const filteredSongs = [];
    if(!filters){
      return data
    }

    for (const song of songs){
      if (filters.title !== "" && song.title !== filters.title){
        continue;
      }

      if (filters.artist !== "" && song.artist !== filters.artist){
        continue;
      }

      if (filters.album !== "" && song.album !== filters.album){
        continue;
      }

      if (filters.genre !== "" && song.genre !== filters.genre){
        continue;
      }
      filteredSongs.push(song);
    }
    return filteredSongs;
  }

  return (
    <div className="container">
    <div className="border-box">
    <SearchBar updateSearchParams={updateFilters}/>
    </div>
    <div className="border-box">
      <DisplayMusic parentSongs={filterSongs(songs)} />
    </div>
    <div className="border-box">
      <AddSong />
    </div>
    </div>
  );
}

export default App;
