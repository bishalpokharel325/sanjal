import React from 'react'
import Story from './Story'
import storydata from './storydata'
import './Storyreel.css'
function getStorydata(item){
return(
    <Story key={item.id} isrc={item.isrc} asrc={item.asrc} title={item.title}/>
)
}
function Storyreel() {
    return (
        <div className="storyreel">
            {storydata.map(getStorydata)}
        </div>
    )
}

export default Storyreel
