import React from 'react'
import Song from './Song'
import '../App.css';

const RangeSelector = ({ onRangeSelected, data, onGenreFilterSelected,onSongDetails }) => {
    if (data == null || data.length === 0) { return <h1>Loading</h1> };


    const chartRangeArray = [1,2, 5, 10, 20, 30, 40, 50, 100];
    const chartRangeOptions = chartRangeArray.map((range, index) => {
        return <option key={index} value={range}>Top {range}</option>
    });


    // CREATES AN ARRAY OF UNIQUE GENRES
    const genreList = [...new Set(data.map(item => {
        return item.category.attributes.term
    }))]

    // SHOVES UNIQUE GENRES INTO AN ARRAY OF OPTION OBJECTS
    let genreOptionArray = [];
    const genres = genreList.forEach((genre) => {
        genreOptionArray.push(<option value={['genre', genre]} >{genre}</option>);
        return genreOptionArray;
    })

    // HANDLES CHART RANGE CHANGE
    const handleChange = (event) => {
        const rangeSelected = event.target.value;
        onRangeSelected(rangeSelected)

    };
    // NEEDS TO HANDLE GENRE FILTER SELECTION
    const handleGenreChange = (event) => {
        const genreFilter = event.target.value;
        // dataTransformer(genreFilter)
        onGenreFilterSelected(genreFilter)
    };





    // THIS NEEDS TO BE EDITED TO TAKE IN THE UPDATED DATA AFTER FILTERING AS AN ARGUMENT
    const unpackChart = data.map((item, index) => {
        return <Song onSongDetails={onSongDetails} key={index} song={item} />
    })


    return (
        <>  <div className='options'>
            <select className='option1' defaultValue={'DEFAULT'} onChange={handleChange}>
                <option value={'DEFAULT'} >Chose chart range</option>
                {chartRangeOptions}
            </select>

            <select className='option1' defaultValue="" onChange={handleGenreChange}>
                <option value="" >Filter by genre</option>
                {genreOptionArray}
            </select>
            </div>
            <div className='songs-container'>
                
            {unpackChart}
            
            </div>

        </>


    )
}
export default RangeSelector;


