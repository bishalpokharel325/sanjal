import React from 'react'
import './Photos.css'


function Photos({src}) {
    return (
        <div className="photos">
            <div className="photos__items">
                <img src={src}/>
            </div>
        </div>
    )
}

export default Photos
