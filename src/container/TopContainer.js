import React, { useState, useEffect } from 'react';
import RangeSelector from '../components/RangeSelector';
import SongDetail from '../components/SongDetail';
// https://itunes.apple.com/gb/rss/topsongs/limit=20/json



const TopContainer = () => {
    const [data, setData] = useState();
    const [range, setRange] = useState();
    const [inspectSong,setInspectSong]=useState();
    const [trigger=false,setTrigger]=useState();


    useEffect(() => {
        awaitSongs();
        ;
    }, [])

    const onRangeSelected =  async (arg) => {
          await setRange(parseInt(arg));
           awaitSongs(arg);
    }

    const onGenreFilterSelected=(criteria)=>{
        const [genre, filterCriteria] = criteria.split(',')
        let filteredArray = [];
        if (genre === 'genre') {
            for (let item of data) {
                if (item.category.attributes.term === filterCriteria) {
                    filteredArray.push(item)
                }
            }
            setData(filteredArray)
        }
    
    
    }

    const urlBuilder = function (argu) {
        const url = `https://itunes.apple.com/gb/rss/topsongs/limit=${argu}/json`
        return url;
    }
    
    const awaitSongs = async (arg_passed=10) => {
        const url_act = await urlBuilder(arg_passed)
        const response = await fetch(url_act);
        const data = await response.json();
        const dataBreakdown = data.feed.entry
        await setData(dataBreakdown)
        // console.log(`API fetch great success,range is : ${arg_passed}`)
    }

    const onSongDetails=(songId)=>{
        console.log(songId)
        const songSelected=data.filter((song)=>{return song.id.attributes['im:id']===songId})
        setTrigger(true)
        setInspectSong(songSelected)

    }

    const onBackButtonPress=()=>{
    setInspectSong("")
    setTrigger(false)
    
    }

    return (
        <>
            {trigger?  <SongDetail song={inspectSong} onBackButtonPress={onBackButtonPress}/>: <RangeSelector onRangeSelected={onRangeSelected} onGenreFilterSelected={onGenreFilterSelected} data={data} onSongDetails={onSongDetails} />}

        </>
    )
}

export default TopContainer;
