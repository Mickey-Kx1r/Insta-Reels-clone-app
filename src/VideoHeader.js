import React from 'react'
import './VideoHeader.css'
// import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function VideoHeader() {
  return (
    <div className='videoHeader'>
        <ArrowBackIosIcon/>
        <h4> Reels</h4>
        <CameraAltIcon/>
    </div>
  )
}

export default VideoHeader