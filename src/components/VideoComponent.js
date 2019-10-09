import React, { Component } from 'react';

export default class VideoComponent extends Component {
  render() {
    return(
      <video
        autoPlay
        muted
        loop
        height="257"
        width="374"
        preload="auto"
        data-video-width="374"
        data-video-height="257"
        src="https://video.farn1-1.fna.fbcdn.net/v/t42.4659-2/22143227_1433610953421206_5333363012327702528_n.mp4?_nc_cat=100&amp;oh=4d03902a497cc539df8244a2f29e4f9a&amp;oe=5BC28AEB">
      </video>
    );
  }
}
