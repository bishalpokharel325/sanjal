import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({asrc,isrc,title}) {
    return (
         <div className="story" style={{ backgroundImage: `url(${isrc})` }}>
            <Avatar className="avatar" src={asrc}/>
            <h5>{title}</h5>
        </div>
    )
}

export default Story
