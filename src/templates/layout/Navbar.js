import React from 'react'
import './Navbar.css'

function Navbar({Left,Middle,Right}) {
    return (
        <div className="navbar">
            {Left && <Left/>}
            {Middle && <Middle/>}
            {Right && <Right/>}
        </div>
    )
}

export default Navbar
