import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <Link>sanjal</Link>
                <span>&copy;2021</span>
            </div>
            <div className="footer__middle">
                <Link>About sanjal</Link>
                <Link>Terms</Link>
                <Link>Developers</Link>
            </div>
            <div className="footer__right">
                <Link>English</Link>
                <Link>Nepali</Link>
                <Link>Hindi</Link>
                <Link>All Languages..</Link>
            </div>
        </div>
    )
}

export default Footer
