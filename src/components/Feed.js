import React, { useContext, useEffect, useState } from 'react'
import './Feed.css'
import Statusinput from './Statusinput'
import Storyreel from './Storyreel'
import Post from './Post'
import postdata from './Postdata'
import axios from 'axios'
import { TokenContext } from '../App'
function fetchPost(item){
return(
    <Post key={item.id} profilePic={item.profilePic} name={item.name} status={item.status} image={item.image} />
)
};
function Feed() {
    const [post, setPost] = useState([])
    const {token,setToken}=useContext(TokenContext)
    console.log(token)
    useEffect(() => {
        axios
            .get('http://localhost:7000/api/posts', {
                headers: {
                    Authorization: "bearer " + `${token}`
                }
            })
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => console.log(err))
    }, [token])
    return (
        <div className="feed">
            <Storyreel />
            <Statusinput />
            {postdata.map(fetchPost)}
            

        </div>
    )
}

export default Feed
