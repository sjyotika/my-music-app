import React, { Component } from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    this.audioRef.current.play();
  }

  componentWillUnmount() {
    this.audioRef.current.pause();
  }

  render() {
    const { song } = this.props;
    return (
      <div>
        <h2>Now Playing</h2>
        <p>{song.title}</p>
        <audio ref={this.audioRef} src={song.src} controls />
      </div>
    );
  }
}

export default AudioPlayer;

