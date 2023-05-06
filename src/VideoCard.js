import React, { useRef, useState } from "react";
import VideoHeader from'./VideoHeader';
import VideoFooter from'./VideoFooter';
import "./Videocard.css";

function VideoCard({url, channel, song, likes, shares, avatarSrc}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      //Stop/pause
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="video">
      <VideoHeader/>
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoplayer"
        src={url}
        alt="Igvideo1"
        loop
      />
      <VideoFooter
      channel={channel}
      song={song}
      likes={likes}
      shares={shares}
      avatarSrc={avatarSrc}
      />
    </div>
  );
};

export default VideoCard;
