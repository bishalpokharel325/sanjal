import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebaritem.css'

function Sidebaritem({src,title,Icon}) {
    return (
        <div className="sidebaritem">
            {src && <Avatar className="avatar" src={src}/>}
            {Icon && <Icon fontSize="large"/>}
            {title && <h4>{title}</h4>}
            
        </div>
    )
}

export default Sidebaritem
