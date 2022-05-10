
const DisplayMusic = (props) => {
    
    return (
        <div className="container">
        <div className="row">
            <h4>Songs</h4>
        </div>
        <div className="row">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentSongs.map((song, index) => {
                        return (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default DisplayMusic;