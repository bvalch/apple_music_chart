import React from 'react'
import '../App.css';


const Song = ({ song,onSongDetails }) => {

    const handleButtonClick=(e)=>{
    onSongDetails(e.target.value)
    
    
    }




    return (
            <div className='song-card'>
                
                <p className='image'><img src={song['im:image'][2].label}></img></p>
                <p>Title : {song.title.label} </p>
                <p>Genre : {song.category.attributes.term}</p>
                
                <audio className='audio'
                    controls
                    src={song.link[1].attributes.href}>

                </audio>
                <br></br>
                <button value={song.id.attributes['im:id']} onClick={handleButtonClick} className='button'>Details</button>
            </div>


    )


}
export default Song;



