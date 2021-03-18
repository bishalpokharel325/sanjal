import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function Post({profilePic,image,name,time,status}) {
    const initialLike=500
    const initialBtn="Like"
    const [like, setLike] = useState(initialLike)
    const[btn,setBtn]=useState(initialBtn)
    const btnChanger=()=>{
        if(btn=="Like"){
            return setBtn(b=>"Unlike")
        }
        else{
            return setBtn(b=>"Like")
        }
    }
    const likeChanger=()=>{
        if(btn=="Like"){
            return setLike(l=>l+1)
        }
        else{
            return setLike(l=>l-1)
        }
    }
    const btnlikeChanger=()=>{
        btnChanger();
        likeChanger();
    }
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profilePic && profilePic}/>
                <div className="post__info">
                    <h6>{name && name}</h6>
                    <p>{time}</p>  
                </div>

            </div>
            <div className="post__bottom">
            <p>{status}</p>
            </div>
            <div className="post__image">
                {image && <img src={image}/>}
            </div>
            <div className="post__likes">
                <button onClick={btnlikeChanger}>
                    <div className="post__option">
                <ThumbUpIcon/>
                    <h6>{btn} {like}</h6>
            </div>
                </button>  
            <div className="post__option">
                <CommentIcon/>
                <h6>Comment</h6>
            </div>
            <div className="post__option">
                <ShareIcon/>
                <h6>Share</h6>
            </div>
            </div>
          
        </div>
    )
}

export default Post
