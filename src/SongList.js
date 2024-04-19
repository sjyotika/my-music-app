import React from 'react';

const SongList = ({ songs, playSong, addToPlaylist ,songs1}) => {
  return (
    <div>  
        <p>
           <ul style={{ listStyle: 'none' }}>
         {songs.map(song => (
          <li key={song.id}>
        <div id="cs1" key={song.id} style={{ border: '3px solid black', borderRadius: '50px', padding: '10px', marginBottom: '10px' }}>
          <img src={song.image} alt={song.title} style={{ width: '100px', height: '100px', marginLeft: '80px', borderRadius: '5px' }} />
          <div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>&nbsp;&nbsp;
          <button onClick={() => addToPlaylist(song)}>+</button>&nbsp;&nbsp;
          <button onClick={() => playSong(song)}>▶️</button>
        </div>
          </li>
                 ))}
               </ul>
        </p>
        <p>
           <ul style={{ listStyle: 'none' }}>
         {songs1.map(song1 => (
          <li key={song1.id}>
        <div id="cs" key={song1.id} style={{ border: '3px solid black', borderRadius: '50px', padding: '10px', marginBottom: '10px' }}>
          <img src={song1.image} alt={song1.title} style={{ width: '100px', height: '100px', marginLeft: '80px', borderRadius: '5px' }} />
          <div>
            <h3>{song1.title}</h3>
            <p>{song1.artist}</p>
          </div>&nbsp;&nbsp;
          <button onClick={() => addToPlaylist(song1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => playSong(song1)}>▶️</button>
        </div>
          </li>
                 ))}
               </ul>
        </p>
    </div>
  );

 }

export default SongList;


