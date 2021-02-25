import React from 'react'
import './Feed.css'
import Statusinput from './Statusinput'
import Storyreel from './Storyreel'
import Post from './Post'
import postdata from './Postdata'
function fetchPost(item){
return(
    <Post key={item.id} profilePic={item.profilePic} name={item.name} status={item.status} image={item.image} />
)
};
function Feed() {
    return (
        <div className="feed">
            <Storyreel/>
            <Statusinput/>
            {/* profilePic,image,name,time,status */}
            {postdata.map(fetchPost)}

           
        </div>
    )
}

export default Feed
