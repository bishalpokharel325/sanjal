import { Avatar } from '@material-ui/core'
import React from 'react'
import './Statusinput.css'
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Statusinput() {
    return (
        <div className="statusinput">
            <div className="si__top">
            <Avatar src="./images/profile.jpg"/>
            <form>
            <input placeholder="Whats on your mind?"/>
            <button> Hidden Button</button>
            </form>
            </div>
            <div className="si__bottom">
                <div className="bottom">
                <ImageIcon style={{color:"green"}}/>
                <h4>Picture</h4>
                </div>
                <div className="bottom">
                    <VideocamIcon style={{color:"red"}}/>
                    <h4>Video</h4>
                </div>
                <div className="bottom">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h4>Feeling/Activity</h4>
                </div>

            </div>
            
        </div>
    )
}

export default Statusinput
