

import React, { Component } from 'react';

import SongList from './SongList';
import AudioPlayer from './AudioPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [
        { id: 1, title: 'Fri(end)s', artist: 'Kim Tae hyeong (V)', image: 'https://i.ytimg.com/vi/XSZ1Vi01GK4/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPBV4JInBAnXCENSNPIHwAP1a8MQ'},
        { id: 2, title: 'Moral of the Story', artist: 'Ashe , Niall H.' , image :'https://s3-us-west-2.amazonaws.com/onestowatch-v2/ashe-niall-horan-moral-of-the-story_1592409528.jpg'},
        { id: 3, title: 'Still With You', artist: 'Jeon Jung Kook' , image : 'https://i1.sndcdn.com/artworks-7nmc0L048KDmtv7Q-aSOK7A-t500x500.jpg'},
        { id: 4, title: 'Love Wins All', artist: 'IU' , image:'https://images.squarespace-cdn.com/content/v1/6130188e699d872ddba29e5d/1712132329279-8B3111LA7BN2XVCA8COL/Love+Wins+All_katturner.jpg'},
        { id: 5, title: 'Daechwita', artist: 'AgustD', image: 'https://cdn.justjaredjr.com/wp-content/uploads/headlines/2020/05/bts-suga-drops-new-music-video-from-solo-project-agust-d.jpg'},
        { id: 6, title: 'Shinunoga E-Wa', artist: 'Fuji Kaze', image: 'https://source.boomplaymusic.com/group10/M00/DE/20/0c7d295911e54b2ab1cfa5146f851008_464_464.jpg'},
        { id: 7, title: 'Life Goes On', artist: 'BTS', image: 'https://i.ytimg.com/vi/-5q5mZbe3V8/hq720.jpg'},
        { id: 8, title: 'Set Me Free', artist: 'Park Jimin', image: 'https://i.redd.it/u9j1fvme6dna1.jpg'},
        { id: 9, title: 'Super', artist: 'Seventeen', image: 'https://sa.kapamilya.com/absnews/abscbnnews/media/2023/life/04/24/seventeen-super-(1).jpg'},
        { id: 10, title: 'Humnava Mere', artist: 'Jubin Nautiyal', image: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Humnava_Mere.jpg'},
        { id: 11, title: 'Lut Gaye', artist: 'Tanishk Bagchi', image: 'https://i.pinimg.com/736x/30/99/fd/3099fd330f7fd0a582bc2e4219a9e32f.jpg'},
        { id: 12, title: 'Jab Tak', artist: 'Armaan Malik', image: 'https://i.ytimg.com/vi/cLJASIjIS7Y/sddefault.jpg'},
        { id: 13, title: 'Red Lights', artist: 'Stray Kids', image: 'https://pbs.twimg.com/media/F_eBPa3WAAAWijF.jpg'},
        { id: 14, title: 'Main Agar Kahoon', artist: 'Sonu Nigam',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTEq8lgW0dhpr9Lalb5dlHfUjBHHPHPWvfa_P4b5lzA&s'},
        { id: 15, title: 'Falak Tak', artist: 'Udit Narayan',image: 'https://i1.sndcdn.com/artworks-0Rzxuyj3SjdJ0EyY-k3sc0A-t500x500.jpg'},
        { id: 16, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjyEnopRoH3A1ct1SOnk28qXqsbauQdTO7C4-QqCung&s'},
        { id: 17, title: 'Kinni Kinni', artist: 'Diljit Dosanjh',image: 'https://i.ytimg.com/vi/L-GWy4TM_bQ/hqdefault.jpg'},
        { id: 18, title: 'Shape Of You', artist: 'Ed Sheeran',image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'},
],
      filteredSongs: [],
      currentSong: null,
      playlist: []
    };
  }

  componentDidMount() {
    // Initially, display all songs
    this.setState({ filteredSongs: this.state.allSongs });
  }
  playSong = (song) => {
    this.setState({ currentSong: song });
  }

  searchSong = (query) => {
    const { allSongs } = this.state;
    const filteredSongs = allSongs.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredSongs });
  }

  addToPlaylist = (song) => {
    this.setState(prevState => ({
      playlist: [...prevState.playlist, song]
    }));
  }

  removeFromPlaylist = (song) => {
    this.setState(prevState => ({
      playlist: prevState.playlist.filter(item => item.id !== song.id)
    }));
  }

  render() {
    const { filteredSongs, currentSong, playlist } = this.state;
    return (
      <div>
       
        <h1>Note Nexus: Connect with Your Soundtrack</h1>
        <input
          type="text"
          placeholder="Discover Melodies..."
          onChange={(e) => this.searchSong(e.target.value)}
        />
        <h2>Let the music speak to your soul - Start your musical adventure today!!</h2>
        <SongList songs={filteredSongs.filter(song => song.id <= 9)} playSong={this.playSong} addToPlaylist={this.addToPlaylist} songs1={filteredSongs.filter(song => song.id > 9 && song.id <=18)} />

        <h2>Playlists that speak your language - Let the music do the talking.</h2>
        <ul>
          {playlist.map(song => (
            <li key={song.id}>
              {song.title}&nbsp;&nbsp;-&nbsp;&nbsp; {song.artist}&nbsp;&nbsp;
              <button onClick={() => this.removeFromPlaylist(song)}>Remove from Playlist</button>&nbsp;&nbsp;
              <button onClick={() => this.playSong(song)}>Play</button>
            </li>
          ))}
        </ul>
        {currentSong && <AudioPlayer song={currentSong} />}
      </div>
    );
  }
}

export default App;



