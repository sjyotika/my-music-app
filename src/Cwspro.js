import React, { useState } from 'react';

function Cwspro() {
  const [playlist] = useState([
    { id: 1, title: 'Falling', artist: 'Harry Styles'},
    { id: 2, title: 'Dangerously', artist: 'Charlie Puth'},
    { id: 3, title: 'Rainy Days', artist: 'Kim Tae hyeong'},
    { id: 4, title: 'Love Wins All', artist: 'IU'},
    { id: 5, title: 'DayLight', artist: 'David Kushner'},
    { id: 6, title: 'Shinunoga E-Wa', artist: 'Fuji Kaze'},
    { id: 7, title: 'Safar', artist: 'Bhuvan Bam'},
    { id: 8, title: 'Life Goes On', artist: 'BTS'},
    { id: 9, title: 'Red Lights', artist: 'Stray Kids'},
    { id: 10, title: 'Jab Tak', artist: 'Armaan Malik'},
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter playlist based on search query
  const filteredPlaylist = playlist.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="music-app">
      <h1>My Music App</h1>
      <Available playlist={filteredPlaylist} />
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
}


function Available({ playlist }) {
  return (
    <div className="playlist">
      <h2>Available Songs :</h2>
      <ol style={{ listStyle: 'none' }}>
        {playlist.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ol>
    </div>
  );
}

function SearchBar({ handleSearch }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for songs, albums, or artists" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}



export default Cwspro;
