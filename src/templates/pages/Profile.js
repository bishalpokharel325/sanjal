import React from 'react'
import Friends from '../../components/Friends'
import Photos from '../../components/Photos'
import ProfileFeed from '../../components/ProfileFeed'
import Footer from '../layout/Footer'
import Headerleft from '../layout/Headerleft'
import Headermiddle from '../layout/Headermiddle'
import Headerright from '../layout/Headerright'
import Navbar from '../layout/Navbar'
import './Profile.css'

function Profile() {
    return (
        <div>
            <Navbar Left={Headerleft} Middle={Headermiddle} Right={Headerright}/>
            <div className="profile__body">
                <div className="profile__left">
                   <div className="profile__pic">
                        <img src="./images/profile.jpg"/>
                   </div>
                   <div className="information">
                       <h4>Information</h4>
                       <div className="information__option">
                            <h5>Works at:</h5>
                            <p>Dursikshya</p>
                       </div>
                       <div className="information__option">
                            <h5>Studied at:</h5>
                            <p>Tribhuvan University</p>
                       </div>
                       <div className="information__option">
                            <h5>Current Address:</h5>
                            <p>Jamal,Kathmandu</p>
                       </div>
                   </div>
                   <div className="profile__friends">
                       <h4>Friends</h4>
                       <div className="friends__inner"> 
                       <Friends src="./images/profile.jpg" title="Bishal Pokharel"/>
                       <Friends src="./images/profile.jpg" title="Bishal Pokharel"/>
                       <Friends src="./images/profile.jpg" title="Bishal Pokharel"/>
                       <Friends src="./images/profile.jpg" title="Bishal Pokharel"/>
                       <Friends src="./images/profile.jpg" title="Bishal Pokharel"/>
                       <Friends src="./images/profile.jpg" title="Bishal Pokharel"/>
                       </div>
                      

                   </div>
                    <div className="profile__photos">
                       <h4>Photos</h4>
                       <div className="photos__inner"> 
                       <Photos src="./images/profile.jpg"/>
                       <Photos src="./images/profile.jpg"/>
                       <Photos src="./images/profile.jpg" />
                       <Photos src="./images/profile.jpg"/>
                       <Photos src="./images/profile.jpg"/>
                       <Photos src="./images/profile.jpg"/>
                       </div>
                      

                   </div>
                   
                </div>
                <div className="profile__middle">
                    <ProfileFeed/>
                </div>
                <div className="profile__right">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdursikshya&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={2000} style={{"border":"none","overflow":"hidden"}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>
                </div>
                
                
            </div>
            <Footer/>
        </div>
    )
}

export default Profile
