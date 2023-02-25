import React from 'react'
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './css/post.css'

function Post({name, description, message, photoURL}) {
  return (
    <div className="posts">
            <div className="post__header">
                <div className="post__headerLeft">
                    <Avatar src={photoURL}/>
                    <div className="post_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>

                <MoreVertIcon/>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__footer">
                <div className="post__footer__option">
                        <ThumbUpAltIcon/>
                        <span>Like</span>
                </div>

                <div className="post__footer__option">
                        <CommentIcon/>
                        <span>Comment</span>
                </div>

                <div className="post__footer__option">
                        <ShareIcon/>
                        <span>Share</span>
                </div>

                <div className="post__footer__option">
                        <SendIcon/>
                        <span>Send</span>
                </div>
            </div>
        </div>
  )
}

export default Post