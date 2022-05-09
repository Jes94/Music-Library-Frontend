import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddSong from "./Components/AddSong/AddSong";


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [AddSong()])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data)
  }


  return (
    <div className="container">
    <div>
      <DisplayMusic parentSongs={songs} />
    </div>
    <div>
      <AddSong />
    </div>
    </div>
  );
}

export default App;
