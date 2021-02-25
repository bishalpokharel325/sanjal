import React from 'react'
import './Headerright.css'
import AddIcon from '@material-ui/icons/Add';
import { Avatar, IconButton } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Headerright() {
    return (
        <div className="header__right">
                <div className="header__profile">
                <Avatar src="https://www.pexels.com/photo/adult-beard-boy-casual-220453/"/>
                <h3>Nabin</h3>
                </div>
                <IconButton>
                 < AddIcon/>
                </IconButton>
                <IconButton>
                 <  ChatBubbleOutlineIcon/>
                </IconButton>
                <IconButton>
                 < NotificationsIcon/>
                </IconButton>
                <IconButton>
                 <  ExpandMoreIcon/>
                </IconButton>
            </div>
    )
}

export default Headerright
