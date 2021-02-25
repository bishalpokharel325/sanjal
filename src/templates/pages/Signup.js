import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Headerleft from '../layout/Headerleft'
import './Signup.css'

import 'react-tabs/style/react-tabs.css';
import SignupForm from '../../components/SignupForm'
function Signup() {
    return (
        <div className="signup__page">
            <Navbar Left={Headerleft}/>
            <div className="signup__body">
                <div className="tab__body">
                <SignupForm/>
            </div>

            </div>
                
            <div className="footer__fixed">
            <Footer/>
            </div>
            
        </div>
    )
}

export default Signup
