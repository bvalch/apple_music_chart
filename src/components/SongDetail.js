import React from "react";
import '../App.css';


const SongDetail = ({ song, onBackButtonPress }) => {
    if (song === null) { <p>Loading</p> } else {


        const handleButtonClick = () => {
            onBackButtonPress()



        }
        console.log(song[0])


        return (
            <div className='song-detail'>

                <div className='img-text'>

                    <div>
                        <p className='image'><img src={song[0]['im:image'][2].label}></img></p>
                    </div>

                    <div>
                        <p>Title : {song[0].title.label} </p>
                        <p>Genre : {song[0].category.attributes.term}</p>
                        <audio className='audio'
                            controls
                            src={song[0].link[1].attributes.href}>

                        </audio>
                        <br></br>
                <button onClick={handleButtonClick} className='button'>Back</button>
                    </div>

                </div>






                

            </div>

        )



    };
}
export default SongDetail