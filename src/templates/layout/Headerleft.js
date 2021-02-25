import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Headerleft.css'
import { Link } from 'react-router-dom';

function Headerleft() {
    return (
        <div>
            <div className="header__left">
            <Link to="/news"><img src="images/logo.jpg"/></Link>
            <div className="header__search">
            <SearchIcon/>
            <input placeholder="Search in Sanjal"/>
            </div>
            </div>
        </div>
    )
}

export default Headerleft
