import React from "react";
// import Ticker from "react-ticker";
import "./VideoFooter.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Stack direction="row" spacing={2}>
          <Avatar src={avatarSrc} />
        <h4>
          {channel} • <Button href="#text-buttons">Follow</Button>            
        </h4>
        </Stack>
      </div>
      <div className="videoFooter_ticker">
      <MusicNoteIcon className="videoFooter_icon"/>
        {/* <Ticker mode='smooth'>
          {
            ({index})=>(
              <>
              <h1>{song}</h1>
              </>
            )
          }
        </Ticker> */}
        <h1>{song}</h1>
      </div>
      <div className="videoFooter_actions">
        <div className="videoFooter_actionLeft">
        <ThumbUpIcon/>
        <ModeCommentIcon/>
        <SendIcon/>
        <MoreHorizIcon/>
        </div>
        <div className="videoFooter_actionRight">
        <ThumbUpIcon/>
        <p>{likes}</p>
        <ModeCommentIcon/>
        <p>{shares}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
