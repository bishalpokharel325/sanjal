import React from 'react'
import './ProfileFeed.css'
import Post from './Post'
import Statusinput from './Statusinput'
import postdata from './Postdata'
function fetchPost(item){
return(
    <Post key={item.id} profilePic={item.profilePic} name={item.name} status={item.status} image={item.image} />
)
};

function ProfileFeed() {
    return (
        <div classname="profile__feed">
            <div className="profile__cover">
                <img src="./images/slider2.png"/>
            </div>
            <Statusinput/>
            {postdata.map(fetchPost)}
            {/* profilePic,image,name,time,status */}
            
            
        </div>
    )
}

export default ProfileFeed
