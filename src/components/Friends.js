import React from 'react'
import './Friends.css'

function Friends({src,title}) {
    return (
        <div className="friends">
            <div className="friends__items">
                <img src={src}/>
            <span>{title}</span>
            </div>
            
            
        </div>
    )
}

export default Friends
