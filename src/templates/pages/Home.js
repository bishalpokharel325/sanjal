import React from 'react'
import Signin from '../../components/Signin'
import Signup from '../../components/Signup'
import Footer from '../layout/Footer'
import Headerleft from '../layout/Headerleft'
import Navbar from '../layout/Navbar'
import './Home.css'

function Home() {
    return (
        <div>
            <Navbar Left={Headerleft}/>
            <div className="home__body">
                <div className="home__slider">
                    
                </div>
                <div className="home__right">
                   <Signin/>
                   <Signup/>
                </div>
            </div>
            <hr/>
            <Footer/>
        </div>
    )
}

export default Home
