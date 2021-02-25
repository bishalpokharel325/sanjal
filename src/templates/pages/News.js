import React from 'react'
import Footer from '../layout/Footer'
import Headerleft from '../layout/Headerleft'
import Headermiddle from '../layout/Headermiddle'
import Headerright from '../layout/Headerright'
import Navbar from '../layout/Navbar'
import Sidebaritem from '../../components/Sidebaritem'
import Feed from '../../components/Feed'
import './News.css'
import AddIcon from '@material-ui/icons/Add';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StorefrontIcon from '@material-ui/icons/Storefront';
import YouTubeIcon from '@material-ui/icons/YouTube';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function News() {
    return (
        <div>
            <Navbar Left={Headerleft} Middle={Headermiddle} Right={Headerright}/>
            <div className="app__body">
                <div className="side__bar">
                    <Sidebaritem src="./images/slider1.png" title="Bishal"/>
                    <Sidebaritem Icon={AddIcon} title="Covid-19 Information"/>
                    <Sidebaritem Icon={FlagIcon} title="Pages"/>
                    <Sidebaritem Icon={GroupIcon} title="Friends"/>
                    <Sidebaritem Icon={ChatBubbleIcon} title="Messenger"/>
                    <Sidebaritem Icon={StorefrontIcon} title="Market Place"/>
                    <Sidebaritem Icon={YouTubeIcon} title="Videos"/>
                    <Sidebaritem Icon={KeyboardArrowDownIcon} title="More"/>
                </div>
                <Feed/>
                <div className="feed__right">
                    <h1>Widgets</h1>
               <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdursikshya&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={2000} style={{"border":"none","overflow":"hidden"}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>

                </div>
               
               
                
            </div>
    
            
            <Footer/>
        </div>
    )
}

export default News
